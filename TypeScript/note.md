


1. UserWidget 在 ts 中的构造函数是 Construct(): void  而非 Constructor

2. 对于 UserWidget 使用 UE create 创造，第一次创造调用Construct ，第二次创造，不会调用构造
                        new 创造，第一次调用Construct，第二次创造调用 Constructor

问题：
使用 new 创造，Button = undefined