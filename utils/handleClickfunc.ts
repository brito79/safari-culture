// import { isAdmin } from "@/app/actions/isAdmin";
// import { redirect } from "next/navigation";
// import { toast } from "react-toastify";

// export const handleAdminClick = async () => {
//   try {

//     const checkIsAdmin = await isAdmin();
//     if (checkIsAdmin) {
//       redirect('/dashboard');
//     } else {
//       // User is logged in but not an admin
//       toast.error("You do not have permission to access the admin dashboard.");
//     }
//   } catch (error) {
//     toast.error("Error checking admin status. Please try again.");
//   }
// }