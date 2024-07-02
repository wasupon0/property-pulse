import { FaBookmark } from "react-icons/fa";

const BookmarkButton = ({ property }) => {
  return (
    <button className="flex items-center justify-center w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600">
      <FaBookmark className="mr-2 " /> Bookmark Property
    </button>
  );
};
export default BookmarkButton;
