
import { ServerError } from "../components/ServerError";
import { useBlog } from "../hooks"
import {   useParams } from "react-router-dom";

export const Blog = () => {
    const { id } = useParams();
    console.log(id)
    const { loading, blog, error } = useBlog({ id: id || "" });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !blog) {
        // Redirect to unauthorized page or handle error
        // if (error) {
            
        // }
        return <ServerError errorContent="something went wrong"></ServerError>// Or render an error message
    }

    return (
        <div className="max-w-5xl mx-auto p-8">
            {blog && ( // Conditional rendering check
                <>
                    <h1 className="text-4xl lg:text-5xl font-bold">{blog.title}</h1>
                    <p className="text-base lg:text-lg text-gray-600 mt-4">Posted on {blog.createdAt}</p>
                    <div className="flex flex-col lg:flex-row justify-between mt-8">
                        <div className="lg:w-3/4 lg:pr-8">
                            <p className="text-base lg:text-lg leading-relaxed">
                                {blog.content}
                            </p>
                        </div>
                        <div className="lg:w-1/4 lg:pl-8 mt-8 lg:mt-0">
                            <div className="flex flex-col items-center">
                                <div className="bg-gray-200 w-24 h-24 rounded-full flex items-center justify-center">
                                    <span className="text-2xl font-bold">{`${blog.author.name.substring(0, 1)}`}</span>
                                </div>
                                <h3 className="text-lg lg:text-xl font-semibold mt-4">{blog.author.name}</h3>
                                <p className="text-sm lg:text-base text-center mt-2">
                                    Master of mirth, purveyor of puns, and the funniest person in the kingdom.
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};



