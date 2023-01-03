import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { get_categories } from "redux/actions/categories/categories"
import { connect } from "react-redux"
import { get_blog_list, get_blog_list_page } from "redux/actions/blog/blog"
import CategoriesHeader from "components/blog/CategoriesHeader"
function Blog({
    get_categories,
    categories,
    get_blog_list,
    get_blog_list_page,
    posts,
    count,
    next,
    previous
})
 {
    useEffect(()=> {
        window.scrollTo(0,0)
        get_categories()
        get_blog_list()
        
    }, [])


    return (
        <Layout>
            <Navbar/>
            <div className="pt-24">

            
            <CategoriesHeader categories={categories&&categories}/>
         
            </div> 
             <Footer/>
        </Layout>
    )
}
const mapStateToProps=state=> ({
    categories: state.categories.categories,
    posts: state.blog.blog_list,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous
})
export default connect(mapStateToProps, {
    get_categories,
    get_blog_list,
    get_blog_list_page
}) (Blog)