# Jira 项目

## 1. 项目配置部分

### 1.1 prettier

> 使用 [prettier](https://prettier.io/) 统一格式化项目代码



### 1.2 commitlint

> 使用 [commitlint](https://github.com/conventional-changelog/commitlint) 规范化 git 提交



## 2. JSX 案例部分

### 2.1 状态提升

### 2.2 undefined.someAttr

* 为了防止出现 `undefined.someAttr` 的情况，从而导致页面崩溃。
* 可以在调用属性或方法之前使用 `?` 避免出错。

`someArr.find((someValue) => someValue.key === otherValue.key)?.someOtherKey || null`



### 2.3 useDebounce

```jsx
import { useState } from 'react'
export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value)
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value)
        }, delay)
        
        return () => clearTimeout(timeout)
    }, [value, delay])
    
    return debounceValue
}
```







## 3. TypeScript

### 3.1 unknown vs any

### 3.2 泛型





## 4. 登录页

### 4.1 JWT 认证

### 4.2 Firebase

### 4.3 Context + login

* [博客](https://blog.csdn.net/weixin_41597254/article/details/121694862)
* [一个案例](https://github.com/CrystalCAI11/udemy-react-course/tree/react-login-demo)

