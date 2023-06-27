const redis = require('redis');

class RedisClient{
        constructor(){
                this.client = redis.createClient();
                this.client.on('error',(error)=>{
                        console.error(error)
                });
        }

        function isAlive(){
                this.client.ping((error, reply)=>{
                        if (error){
                                return false;
                        }
                        else {
                                return true;
                        }
                });
        }

        async get(value){
                await this.client.get(value, (error, result)=>{
                        if (error){
                                console.log(error);
                        } else{
                                return result;
                        }
                })
        };

        async set(key, value, duration){
                await this.client.set(key, value, EX, x);
        };

        async del(key){
                await this.client.del(key)
        }
}

export const redisClient = new RedisClient();
export default redisClient;
