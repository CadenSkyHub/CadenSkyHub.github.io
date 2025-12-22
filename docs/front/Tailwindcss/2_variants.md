# 变体

可以创建一些组件的 `tailwindcss` 变体，通过组件的属性来根据需求不同来指定。同时可用于 `vue`、`react` 等

官网：[Tailwind Variants](https://www.tailwind-variants.org/docs/getting-started)



## 安装

``` bash
bun add tailwind-variants
```



## 示例 1

这个例子展示了如何定义变体，以及如何通过 `VariantProps` 自动生成 Props 类型，省去手动写类型的麻烦。

```tsx
// components/Button.tsx
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

// 1. 定义样式变体
const button = tv({
    // base: 所有按钮共有的基础样式
    base: "font-medium active:opacity-90 transition-all rounded-lg flex items-center justify-center outline-none focus:ring-2 focus:ring-offset-2",

    // variants: 定义不同的外观维度
    variants: {
        color: {
            primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
            secondary: "bg-zinc-200 text-zinc-900 hover:bg-zinc-300 focus:ring-zinc-500",
            danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
        },
        size: {
            sm: "text-sm px-3 py-1.5 h-8",
            md: "text-base px-4 py-2 h-10",
            lg: "text-lg px-6 py-3 h-12",
        },
        fullWidth: {
            true: "w-full",
        }
    },

    // defaultVariants: 默认值
    defaultVariants: {
        color: "primary",
        size: "md",
    }
});

// 2. 定义 Props 类型
// VariantProps<typeof button> 会自动把 color, size, fullWidth 提取成可选属性
type ButtonVariants = VariantProps<typeof button>;

// 继承原生 button 属性 (onClick, type, disabled 等)
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
    children: React.ReactNode;
}

/*

如果这里 color 类型报错，尝试以下解决方案
--- A ---
1. 使用 Omit<原生属性, "要剔除的属性名">
2. 然后再 extends ButtonVariants
interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, ButtonVariants {
	children: React.ReactNode;
}

--- B ---
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants & {
  children: React.ReactNode;
};

--- C ---
重命名 color

*/




// 3. 组件实现
export const Button = ({
    color,
    size,
    fullWidth,
    className, // 允许外部传入额外的 className
    children,
    ...props   // 捕获 onClick 等其他原生属性
}: ButtonProps) => {
    return (
        <button
            // 4. 调用 button() 函数，传入变体 props 和额外的 className
            // tv 会自动处理 class 合并
            className={button({ color, size, fullWidth, className })}
            {...props}
        >
            {children}
        </button>
    );
};

// 使用
const App = () => {
    return (
        <>
            <Button btnColor="danger" size="lg">123</Button>
            <Button btnColor="primary" size="md">abc</Button>
        </>
    )
}


export default App
```



## 示例 2

这个例子展示了 `tv` 最强大的功能：**Slots**。

一个组件由多个部分组成（外壳、图片、标题），我们可以在一个地方统一管理它们。

```tsx
// components/Card.tsx
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

// 1. 定义多插槽组件
const card = tv({
  // slots: 定义组件的各个部分
  slots: {
    base: "border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow",
    imageWrapper: "aspect-video w-full overflow-hidden bg-zinc-100",
    image: "w-full h-full object-cover transition-transform hover:scale-105",
    content: "p-4",
    title: "text-lg font-bold text-zinc-800 mb-1",
    description: "text-sm text-zinc-500",
  },
  
  // variants: 这里的变体可以同时控制多个 slot
  variants: {
    isDark: {
      true: {
        base: "bg-zinc-900 border-zinc-800",
        title: "text-zinc-100",
        description: "text-zinc-400"
      }
    }
  }
});

type CardVariants = VariantProps<typeof card>;

interface CardProps extends CardVariants {
  imgSrc: string;
  title: string;
  desc: string;
  className?: string; // 允许给最外层容器加样式
}

export const Card = ({ imgSrc, title, desc, isDark, className }: CardProps) => {
  // 2. 调用 card() 函数，解构出每个 slot 的 className 生成器
  const { base, imageWrapper, image, content, title: titleClass, description } = card({ isDark });

  return (
    // base() 是个函数，可以传入 className 进行合并
    <div className={base({ className })}>
      <div className={imageWrapper()}>
        <img src={imgSrc} alt={title} className={image()} />
      </div>
      
      <div className={content()}>
        {/* 注意：如果有命名冲突（如 title），我们可以重命名解构出来的变量 */}
        <h3 className={titleClass()}>{title}</h3>
        <p className={description()}>{desc}</p>
      </div>
    </div>
  );
};
```



## 应用

在你的页面文件（如 `App.tsx` 或 `page.tsx`）中直接使用：

```tsx
import { Button } from "./components/Button";
import { Card } from "./components/Card";

export default function App() {
  return (
    <div className="p-10 space-y-8 bg-zinc-50 min-h-screen">
      
      {/* --- 1. 使用 Button --- */}
      <div className="space-x-4">
        {/* 使用默认样式 */}
        <Button onClick={() => alert('Clicked!')}>
          默认按钮
        </Button>
        
        {/* 覆盖变体 */}
        <Button color="secondary" size="sm">
          次要小按钮
        </Button>
        
        {/* 覆盖变体 + 传入原生属性 + 覆盖样式(bg-black会覆盖primary的蓝色) */}
        <Button 
          color="danger" 
          size="lg" 
          disabled 
          className="shadow-xl"
        >
          大号危险按钮
        </Button>
        
        {/* 传入布尔值变体 */}
        <div className="mt-4">
            <Button fullWidth color="primary">全宽按钮</Button>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* --- 2. 使用 Card --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 普通卡片 */}
        <Card 
          imgSrc="https://picsum.photos/id/1/400/300"
          title="React 教程"
          desc="学习如何使用 React 构建现代 Web 应用。"
        />

        {/* 暗色模式卡片 + 外部样式覆盖(w-full max-w-sm) */}
        <Card 
          isDark={true}
          imgSrc="https://picsum.photos/id/2/400/300"
          title="Tailwind Variants"
          desc="优雅地管理你的组件样式变体。"
          className="ring-2 ring-purple-500" // 给最外层加了个紫色光环
        />
      </div>
      
    </div>
  );
}
```

## 总结要点

1.  **定义 (Define)**：使用 `tv({...})` 定义基础样式和变体。
2.  **提取类型 (Type)**：使用 `VariantProps<typeof button>` 自动获取 `color="primary" | "secondary"...` 这种类型提示。这在写 Props 时非常关键。
3.  **传递 (Pass)**：
    -   **单元素**：`className={button({ ...props })}`
    -   **多插槽**：`const { base, title } = card({...});` 然后 `<div className={base()}>`
4.  **覆盖 (Override)**：`tv` 内置了合并逻辑，如果你在外部传入 `className="bg-black"`，它会完美覆盖掉组件内部定义的 `bg-blue-600`，不会产生冲突。