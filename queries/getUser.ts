import supabase from "../lib/supabase";
import User from "../types/user.interface";
import Review from "../types/review.interface";
import Toilet from "../types/toilet.interface";

const getUser = async (userId: string) => {
  const result = await supabase
    .from<User & { reviews: (Review & { toilet: Toilet })[] }>("users")
    .select("*,reviews(*,toilets(*))")
    .eq("id", userId)
    .single();

  return result;
};

export default getUser;
