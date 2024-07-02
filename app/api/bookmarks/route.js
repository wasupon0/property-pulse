import connectDB from "@/config/database";
import Property from "@/models/Property";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";

export const POST = async (request) => {
  try {
    await connectDB();

    const { propertyId } = await request.json();

    const sessionUser = await getSessionUser();

    if (!session || !session.userId) {
      return new Response("User ID is required", { status: 401 });
    }

    const { userId } = sessionUser;

    // Find user in database
    const user = await User.findOne({ _id: userId });

    // Check if user is bookmarked
    let isBookmarked = user.bookmarks.includes(propertyId);

    let message;

    if (isBookmarked) {
      // If already bookmarked, remove bookmark
      user.bookmarks.pull(propertyId);
      message = "Property removed from bookmarks";
      isBookmarked = false;
    } else {
      // If not bookmarked, add bookmark
      user.bookmarks.push(propertyId);
      message = "Property added to bookmarks";
      isBookmarked = true;
    }

    await user.save();

    return new Response(JSON.stringify({ message, isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Bookmark error occurred", { status: 500 });
  }
};
