import { Ratelimit } from "@upstash/ratelimit"; 
import redis from "@/DATABASE/redis";

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(3, "1m"),
  analytics: true,
 
  prefix: "@upstash/ratelimit",
});

export default ratelimit
