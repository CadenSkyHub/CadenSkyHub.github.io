# 代码组

可以对多个代码进行分组展示，并有一个可切换 `tab` 栏

## 输入

```` markdown
::: code-group

``` go [这是go输出]

package main
import "fmt"
func main(){
	fmt.println("这是代码组")
}

```


``` python [这是python输出]

print("这是代码组")

```


``` php [这是php输出]

echo "这是代码组";

```

``` js [这是js输出]

console.log("这是代码组")

```

:::
````





## 展示

::: code-group

``` go [这是go输出]
package main
import "fmt"
func main(){
	fmt.println("这是代码组")
}
```


``` python [这是python输出]
print("这是代码组")

```


``` php [这是php输出]
echo "这是代码组";

```

``` js [这是js输出]
console.log("这是代码组")

```

:::