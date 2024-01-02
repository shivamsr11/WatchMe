import Comment from "./Comment";

const CommentsContainer = () => {
    const commentsData = [
        {
            name: "Shivam Rajmane",
            text: "lorem ipsum",
            reply: []
        },
        {
            name: "Shivam Rajmane",
            text: "lorem ipsum",
            reply: [
                {
            name: "Shivam Rajmane",
            text: "lorem ipsum",
            reply: [
                {
            name: "Shivam Rajmane",
            text: "lorem ipsum",
            reply: [{
            name: "Shivam Rajmane",
            text: "lorem ipsum",
            reply: []
        },]
        },{
            name: "Shivam Rajmane",
            text: "lorem ipsum",
            reply: []
        },
            ]
        },
            ]
        },
        {
            name: "Shivam Rajmane",
            text: "lorem ipsum",
            reply: []
        },
        {
            name: "Shivam Rajmane",
            text: "lorem ipsum",
            reply: []
        }
    ]

    const CommentsList = ({ comments }) => {
        return comments?.map((comment, index) => (
            <div key={index} className="m-1">
                 <Comment  data={comment} />
                    <div className="pl-5 border border-l-black ml-5">
                        <CommentsList comments={comment.reply}/>
                    </div>
            </div>
        ))
    }

    return (
        <div className="p-5 m-2">
            <h1 className=" font-bold text-2xl">Comments : </h1>
            <div>
                <CommentsList comments={commentsData} />
            </div>
        </div>
    )
}

export default CommentsContainer;