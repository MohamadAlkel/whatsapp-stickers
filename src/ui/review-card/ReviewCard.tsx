import React, {useMemo, memo} from "react";
import { ReviewCardWrapper, CardPhoto, Star, Comment, Username } from "./ReviewCard.style"

const ReviewCard = ({comment, username, starNumber = 4})=>{

    const NumberList = useMemo(()=> {
        const listItems = [];
        for (let i = 0; i < starNumber; i++) {
          listItems.push(<Star/>);
        }
        return <>{listItems}</>;
    }, [starNumber])

      
    return (
        <ReviewCardWrapper>
            <CardPhoto src="https://upload.wikimedia.org/wikipedia/commons/5/55/Ruby-HighCompression-Tiny.jpg"/>
            <div>
                <Comment>{comment}</Comment>
                {NumberList}
                <Username>{username}</Username>
            </div>
        </ReviewCardWrapper>
    )
}

export default memo(ReviewCard);