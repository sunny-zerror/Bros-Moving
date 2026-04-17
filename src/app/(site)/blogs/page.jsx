import BlogsGrid from '@/components/blogs/BlogsGrid'
import PageHero from '@/components/common/PageHero'
import React from 'react'

const page = () => {
    return (
        <div>
            <PageHero
                title={"Discover Our Latest Stories"}
                description={"Explore a collection of the latest news, practical guides, and industry insights—all in one place."}
                image={"/images/blogpage/blog_hero.png"}
            />
            <BlogsGrid/>
        </div>
    )
}

export default page