import { collection, addDoc, query, where, getDocs, limit, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";
export interface Post {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: unknown;
  category: "finance" | "compsci";
  bannerImage: string;
  createdAt: Date;
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "posts"));

    const posts: Post[] = querySnapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: data.id,
        title: data.title,
        slug: data.slug,
        description: data.description,
        content: data.content,
        category: data.category,
        bannerImage: data.bannerImage,
        createdAt: data.createdAt?.toDate()
          ? data.createdAt.toDate()
          : new Date(data.createdAt),
      };
    });

    return posts;
  } catch (e) {
    console.error("Error fetching all posts: ", e);
    throw e;
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, where("slug", "==", slug), limit(1));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const doc = querySnapshot.docs[0];
    const data = doc.data();

    return {
      id: data.id,
      title: data.title,
      slug: data.slug,
      description: data.description,
      content: data.content,
      category: data.category,
      bannerImage: data.bannerImage,
      createdAt: data.createdAt?.toDate()
        ? data.createdAt.toDate()
        : new Date(data.createdAt),
    };
  } catch (e) {
    console.error(`Error fetching post with slug ${slug}: `, e);
    throw e;
  }
}

export async function createPost(post: Post): Promise<string> {
  try {
    const postsRef = collection(db, "posts");
    const docRef = await addDoc(postsRef, post);
    
    console.log("Document successfully written with ID: ", docRef.id);
    
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

export async function updatePost(slug: string, data: Partial<Post>): Promise<void> {
  try {
    const q = query(collection(db, "posts"), where("slug", "==", slug), limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error(`Post with slug "${slug}" not found.`);
    }
    const docId = querySnapshot.docs[0].id;
    const postDocRef = doc(db, "posts", docId);

    await updateDoc(postDocRef, data);
    console.log(`Document with slug "${slug}" updated successfully.`);
  } catch (e) {
    console.error(`Error updating post with slug ${slug}: `, e);
    throw e;
  }
}

export async function deletePost(slug: string): Promise<void> {
  try {
    const q = query(collection(db, "posts"), where("slug", "==", slug), limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error(`Post with slug "${slug}" not found.`);
    }
     const docId = querySnapshot.docs[0].id;
    const postDocRef = doc(db, "posts", docId);
    await deleteDoc(postDocRef);
    console.log(`🗑️ Document with slug "${slug}" deleted successfully.`);
  } catch (e) {
    console.error(`Error deleting post with slug ${slug}: `, e);
    throw e;
  }
}