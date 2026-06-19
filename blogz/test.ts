import { createPost, getPostBySlug, getAllPosts, Post } from "./src/lib/posts";

async function runTests() {
  console.log("query testing");

  // Generate a unique slug for this test run so it doesn't conflict with old data
  const testSlug = `typescript-is-awesome-${Date.now()}`;

  // Mock data matching your Post interface perfectly
  const mockPost: Post = {
    id: Math.floor(Math.random() * 100000),
    title: "Understanding TypeScript Interfaces with Firebase",
    slug: testSlug,
    description: "A deep dive into type-safe database queries.",
    content: { blocks: [{ text: "This is some rich text content!" }] }, // dynamic 'unknown' structure
    category: "compsci",
    bannerImage: "https://example.com/banner.png",
    createdAt: new Date()
  };

  try {
    // --- TEST 1: Create Post ---
    console.log("1️⃣ Testing createPost()...");
    const firestoreId = await createPost(mockPost);
    console.log(`✅ Success! Post saved with Firestore ID: ${firestoreId}\n`);


    // --- TEST 2: Get Post by Slug ---
    console.log(`2️⃣ Testing getPostBySlug() for slug: "${testSlug}"...`);
    const fetchedPost = await getPostBySlug(testSlug);
    
    if (fetchedPost) {
      console.log("✅ Success! Found the post:");
      console.log(`   Title: ${fetchedPost.title}`);
      console.log(`   Category: ${fetchedPost.category}`);
      console.log(`   Created At (JS Date): ${fetchedPost.createdAt.toISOString()}\n`);
    } else {
      console.log("❌ Failed: Post not found.\n");
    }


    // --- TEST 3: Get All Posts ---
    console.log("3️⃣ Testing getAllPosts()...");
    const allPosts = await getAllPosts();
    console.log(`✅ Success! Retrieved ${allPosts.length} total posts from Firestore.`);
    
    // Verify our newly created post exists in the full list
    const foundInList = allPosts.some(p => p.slug === testSlug);
    console.log(`   Is our new post in the list? ${foundInList ? "Yes 🎉" : "No ❌"}\n`);

    console.log("🏁 All tests completed successfully!");

  } catch (error) {
    console.error("❌ Test suite failed with an error:", error);
  }
}

// Execute the test suite
runTests();