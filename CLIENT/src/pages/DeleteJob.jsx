import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { redirect } from "react-router-dom";

/* eslint-disable react-refresh/only-export-components */
export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/jobs/${params.id}`);
    toast.success("Job deleted succesfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
  return redirect("/dashboard/all-jobs");
};

const DeleteJob = () => {
  return <h1>DeleteJob Page</h1>;
};

export default DeleteJob;
