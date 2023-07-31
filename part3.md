> **Part 3: Multi-player**
>
> This part is a theoretical question on the topic of distributed systems, so we don't anticipate code to be written. Instead, write down your thoughts on the problem and the questions raised.
>
> We’re going to introduce the idea that multiple Collectors can try and catch Creature at the same time.
> Scenario:
>
> 1. I’m sat at my computer and I see a Creature I want to catch. I try to catch it.
> 2. At the exact same time, my neighbour sees the same Creature and also tries to catch it.
> 3. My neighbour succeeds and adds the Creature to his collection before I’ve finished catching it.
> 4. I am unable to catch the Creature because it has already been caught.
> 5. I now feel sad.
>
> How can we avoid this situation? Does your program handle this elegantly? If not, how can you change it to allow a Creature to be caught by multiple people? What are the ramifications of allowing that?
> It may help to imagine that instead of just two people, it’s 10,000 people cramming into Central Park to catch the same Creature - would the same solution work then? What are the limitations? How could you mitigate this?

This problem represents a concurrency issue in distributed systems known as the "read-modify-write" race condition. This occurs when multiple entities read a value, make some calculations or decisions based on that value, and then write back a new value.

In this case, multiple collectors are reading the state of the creature (is it caught or not), deciding to catch it, and then attempting to change the state of the creature (catching it). If two collectors do this simultaneously, they can both end up attempting to catch the creature because when they read the state, the creature was not caught.

To handle this, we can consider a few strategies:

1. **Locking**: Implement a locking mechanism. When a collector tries to catch a creature, it first acquires a lock on that creature. If the lock acquisition is successful, the collector can then proceed to catch the creature. If the creature is already locked by another collector, the collector has to wait or abandon the attempt. While this approach prevents the problem, it can lead to other issues, such as deadlocks or resource starvation.

2. **Optimistic Concurrency Control**: Allow the operation to proceed assuming there's no conflict, but verify at the time of update. If there's a conflict (e.g. the creature has already been removed from the world), then it can be assumed the creature has already been caught so we can abort the operation.

3. **Allow multiple captures**: Change the design of the system so that a creature can be caught by multiple collectors. This change could be implemented by having a list of collectors who have caught each creature, instead of a single collector. The downside of this approach is that it could make the game too easy if creatures can be caught multiple times.

When scaling this application to handle many players (such as thousands of collectors congregating in Central Park), strategies like locking or Optimistic Concurrency Control could become bottlenecks. The server might end up spending a significant amount of time managing locks or dealing with many failed operations due to OCC, leading to inefficient resource utilization and a poor user experience.

One approach to manage such a situation is sharding or partitioning. Here, the world is divided into smaller regions, each managed by a different server. This strategy helps distribute the load across multiple servers, thus reducing the contention for the same resources. However, sharding comes with its own challenges such as deciding the optimal way to divide the world, handling communication between shards, and dealing with collectors moving from one shard to another.

If all collectors end up in a small area of the park (i.e., end up in the same shard), sharding might not fully alleviate the problem. In this case, an alternative solution could be to reconsider the game mechanics. We could potentially allow a creature to be caught by multiple collectors. This might make the game a little bit easy but it would certainly alleviate the technical issues!
