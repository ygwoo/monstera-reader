# Monstera Reader
>一个基于Electron和Angular11+的文本阅读器

## 快速开始：
>你的本地环境需要安装 [node](http://nodejs.cn/) 、 [git](https://git-scm.com/) 和 [yarn](https://yarnpkg.com/zh-Hans/)。框架技术栈基于 Typescript、Angular、g2、@delon 和 ng-zorro-antd，提前了解和学习这些知识会非常有帮助。

### 安装
>请先通过 ng version 命令确认全局 Angular Cli 版本为最新版本号，有关如何升级安装请参考[CLI 命令参考手册](https://angular.cn/cli)。

```
git clone --depth=1 git@github.com:ygwoo/scbim-planform.git scbim-planform

cd scbim-planform

yarn
```

### 启动
```
ng serve --open
```
或者
```
yarn start
```

### 升级Angular
Angular 升级可以根据 update.angular.io 来检查每个步骤，执行下述命令几乎可以无缝升级破坏性变更：
```
ng update @angular/cli @angular/core
```

### 框架升级

#### 方式一：修改版本号
修改 package.json 所有 @delon/ 开头的类库版本号为最新版本号，如何修改请参考[*npm语义化版本号规则*](https://www.npmjs.com.cn/getting-started/semantic-versioning/)。然后重新执行：
```
yarn
```

#### 方式二：更新所有类库
框架在 package.json 里多数类库都是使用宽松的版本号，例如：^0.1.0 带有 ^ 符号表示使用最新次版本号，因此，0.7.0 也是该范围之列。

要想采用这种更新方式需要按以下步骤进行：

+ 删除 node_modules 文件夹及 yarn.lock 文件
+ 执行 yarn

>注意： 这种方式会对所有类库按比较新的版本安装，但有可能会导致由于第三方类型的破坏性变更会导致一些不必要的麻烦。

## 目录结构
>Monstera 使用 NG-ALAIN 构建的标准 Angular CLI 构建的项目，并提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

```
├── _mock                                       # Mock 数据规则
├── src
│   ├── app
│   │   ├── core                                # 核心模块
│   │   │   ├── i18n
│   │   │   ├── net
│   │   │   │   └── default.interceptor.ts      # 默认HTTP拦截器
│   │   │   ├── services
│   │   │   │   └── startup.service.ts          # 初始化项目配置
│   │   │   └── core.module.ts                  # 核心模块文件
│   │   ├── layout                              # 通用布局
│   │   ├── routes
│   │   │   ├── **                              # 业务目录
│   │   │   ├── routes.module.ts                # 业务路由模块
│   │   │   └── routes-routing.module.ts        # 业务路由注册口
│   │   ├── shared                              # 共享模块
│   │   │   └── shared.module.ts                # 共享模块文件
│   │   ├── app.component.ts                    # 根组件
│   │   └── app.module.ts                       # 根模块
│   │   └── delon.module.ts                     # @delon模块导入
│   ├── assets                                  # 本地静态资源
│   ├── environments                            # 环境变量配置
│   ├── styles                                  # 样式目录
└── └── style.less                              # 样式引导入口
```

## 体系结构
>待补充...

## 构建和发布
当需要发布新版本时，只需要运行一行命令就可以打包你的应用：
```
npm run build
```

Monstera 是基于 NG-ALAIN 的一个标准 Angular CLI 项目，因此也可以参照 [Build](https://angular.cn/cli/build) 完成更复杂的构建需求。构建打包成功之后，会在根目录生成 dist 文件夹，里面就是构建打包好的文件，包含若干 *.js、*.css、index.html 等静态文件。

### 运行环境配置
当你需要区别开发和部署以及测试环境的时候，可以通过 src/environments 文件夹根据不同环境配置相应的参数，配置项同时也可以在应用当中直接调用它们。同时，还需要配置 angular.json 内的配置项，最后你可以透过命令改变环境配置。

### 分析构建文件体积
如果构建文件很大，可以通过 analyze 命令构建并分析依赖模块的体积分布，从而优化代码。
```
npm run analyze
```
受限于 [#10589](https://github.com/angular/angular-cli/issues/10589)，需要安装全局 webpack-bundle-analyzer 包：
```
npm install -g webpack-bundle-analyzer@latest
cd dist/
webpack-bundle-analyzer stats.json
```

### ngnix 部署
>待补充...

### docker 部署
>待补充...

## 其它

### Git Commit Log 指南

#### Subject 标题
标题不超过50个字符，结尾不需要标点符号；应该使用关键字 + 祈使句来描述，比如：fix: data display error。应该尽量使用英文表述。

关键字如下：

| 关键字   | 描述                  |
|----------|---------------------|
| feat     | 增加新功能            |
| fix      | 修复错误              |
| docs     | 修改文档              |
| style    | 修改样式              |
| refactor | 代码重构              |
| test     | 增加测试模块          |
| chore    | 更新核心模块、配置文件 |
| update   | 更新框架或依赖        |

#### Content 内容
如果修改较小内容可不填

#### 提交代码校验
package.json文件中增加配置

```
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged"
    }
  },
```

## package.json语义化版本规则

1.0 或 1.0.x 或 ~1.0.4：只接受补丁级版本更新

1 或 1.x 或 ^1.0.4：只接受小版本号和补丁版本更新

* 或 x：接受所有类型更新

## yarn常用命令汇总

### yarn intall
yarn install用于安装一个项目的所有依赖。 这个命令最常见的使用场景是在你刚Check out一份项目代码之后，或者在你需要使用其他开发者新增加的项目依赖的时候。
执行不带任何命令的yarn，等同于执行yarn install，并透传所有参数。

### yarn add
一个包是一个包含代码的文件夹和一个描述包内容的package.json文件。 如果你想使用其他包，首先要将其加入依赖列表。 也就是执行yarn add package-name命令，来为项目安装所需的包。如果习惯使用 npm， 你可能希望使用 --save 或 --save-dev， 这些已经被 yarn add 和 yarn add --dev 所取代。 更多信息，请参阅 [yarn add](https://yarnpkg.com/zh-Hans/docs/cli/add) 文档。

你可以用以下方法指定版本号：
+ yarn add package-name 会安装 latest 最新版本。
+ yarn add package-name@1.2.3 会从 registry 里安装这个包的指定版本。
+ yarn add package-name@tag 会安装某个 “tag” 标识的版本（比如 beta、next 或者 latest）。

### yarn outdated
列出当前项目包的所有依赖项的版本信息，包括当前已安装的版本、最符合语义版本定义（semver）的版本和最新的可用版本。

### yarn upgrade
upgrade命令会根据在 package.json 文件中所指定的版本范围将依赖更新到其最新版本，也会重新生成yarn.lock 文件。

```
yarn upgrade-interactive [--latest]
```
upgrade-interactive 与 upgrade 命令采用相同的参数和功能。 在执行升级操作之前，此命令将显示已过期的包列表，并允许用户选择相应的想要升级的包。
>--latest : 此标志告知 yarn 忽略 package.json 中指定的版本范围，改用资源库中标为 latest 的版本，谨慎使用。

### yarn check
验证当前项目 package.json 里的依赖版本和 yarn 的 lock 文件是否匹配。

```
yarn check [--integrity]
```
验证当前项目 package.json 里包内容的版本和 hash 值是否与 yarn 的 lock 文件一致。 这有助于验证包依赖没有更改。

### yarn cache

```
yarn cache list [--pattern]
```
Yarn 将每个包存储在你的文件系统-用户目录-全局缓存中。yarn cache list 将列出已缓存的每个包。
yarn cache list --pattern <pattern> 将列出匹配指定模式的已缓存的包。

```
yarn cache dir
```
运行 yarn cache dir 会打印出当前的 yarn 全局缓存在哪里。

```
yarn cache clean [<module_name...>]
```
运行此命令将清除全局缓存。 将在下次运行 yarn 或 yarn install 时重新填充。 此外，您可以指定一个或多个想要清除的包。

## npm常用命令汇总

### 一、查询

查看所有全局安装包
```
npm list -g --depth 0
```

查看本地所有依赖包版本信息
```
npm outdate
```

### 安装/卸载

全局安装依赖包
```
npm install -g <package-name>
```

本地安装生产环境依赖包
```
npm install --save <package-name>[@latest]/[@next]
```

本地安装开发环境依赖包
```
npm install --save-dev <package-name>[@latest]/[@next]
```

卸载全局包
```
npm uninstall -g <package-name> 
```

卸载本地包
```
npm uninstall <package-name>
```
### 更新

更新所有本地依赖包
```
npm update
```

更新所有全局依赖包
```
npm update -g
```

更新全局安装依赖包
```
npm update -g <package-name>
```