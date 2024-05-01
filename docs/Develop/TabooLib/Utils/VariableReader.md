---
sidebar_position: 1
---

# VariableReader

这是 **TabooLib** 提供的一个工具类, 用于处理字符串中嵌入变量的读取和操作.  
[VariableReader.kt](https://github.com/TabooLib/taboolib/blob/master/common-util/src/main/kotlin/taboolib/common/util/VariableReader.kt)

## 用法

### 基本的变量替换

```kotlin
// 设置读取器, 以 "{{" 开头, 以 "}}" 结尾
val reader = VariableReader("{{", "}}")
// 设置读取器要处理的字符串
val source = "Hello, {{name}}! Today is {{day}}."
val result = reader.replaceNested(source) {
    when (this) {
        "name" -> "TabooLib"
        "day" -> "Monday"
        else -> this
    }
}
println(result) // 输出: Hello, TabooLib! Today is Monday.
```

### 自定义标记

```kotlin
// 设置读取器, 以 "<" 开头, 以 ">" 结尾
val reader = VariableReader("<", ">")
// 设置读取器要处理的字符串
val source = "Hello, <name>! Today is <day>."
val result = reader.replaceNested(source) {
    when (this) {
        "name" -> "TabooLib"
        "day" -> "Monday"
        else -> this
    }
}
println(result) // 输出: Hello, TabooLib! Today is Monday.
```

### 将字符串解析为 part 列表

```kotlin
// 设置读取器, 以 "{{" 开头, 以 "}}" 结尾
val reader = VariableReader("{{", "}}")
// 设置读取器要处理的字符串
val source = "Here is a number: {{number}}, and here is a string: {{string}}."
val parts = reader.readToFlatten(source)
parts.forEach {
    println("Text: ${it.text}, IsVariable: ${it.isVariable}")
}
```

将会返回以下内容
```
Text: 'Here is a number: ', IsVariable: false
Text: 'number', IsVariable: true
Text: ', and here is a string: ', IsVariable: false
Text: 'string', IsVariable: true
Text: '.', IsVariable: false
```