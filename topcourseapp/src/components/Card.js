import React from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  const course = props.course;
  const likedcourses = props.likedcourses;
  const setLikedcourses = props.setLikedcourses;

  function clickHandler() {
    console.log(course.id, likedcourses.includes(course.id));
    if (likedcourses.includes(course.id)) {
      setLikedcourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed");
    } else {
      if (likedcourses.length === 0) {
        setLikedcourses([course.id]);
      } else {
        setLikedcourses((prev) => [...prev, course.id]);
      }
      toast.success("Like Successfully");
    }
  }
  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url}></img>
        <div>
          <button
            onClick={clickHandler}
            className="w-[40px] h-[40px] rounded-full bg-white absolute right-2 bottom-[-13px] grid place-items-center"
          >
            {likedcourses.includes(course.id) ? (
              <FcLike fontSize={"1.75rem"} />
            ) : (
              <FcLikePlaceholder fontSize={"1.75rem"} />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="text-white font-semibold text-lg leading-6">
          {course.title}
        </div>
        <div className="text-white mt-2">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </div>
      </div>
    </div>
  );
}

export default Card;
