"use client";

import urlFor from "@/lib/urlFor";
import Image from "next/image";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  console.log(posts.length);

  return (
    <div>
      <hr className="border-[#f7ab0a] mb-10" />

      <div>
        {/* posts */}
        {posts.map((post) => (
          <div key={post._id}>
            <div>
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BlogList;
