(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{170:function(e,a,t){"use strict";t.r(a);var s=t(0),v=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"git-分支管理策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-分支管理策略","aria-hidden":"true"}},[e._v("#")]),e._v(" git 分支管理策略")]),e._v(" "),t("h2",{attrs:{id:"一、主分支master"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、主分支master","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、主分支master")]),e._v(" "),t("p",[e._v("代码库应该有且只有一个主分支。所有提供给用户使用的正式版本，都在这个主分支上发布")]),e._v(" "),t("p",[e._v("Git主分支的名字，默认叫做"),t("code",[e._v("master")]),e._v("。它是自动建立的，版本库初始化以后，默认就是在主分支上进行开发。")]),e._v(" "),t("h2",{attrs:{id:"二、开发分支dev"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、开发分支dev","aria-hidden":"true"}},[e._v("#")]),e._v(" 二、开发分支dev-*")]),e._v(" "),t("p",[t("code",[e._v("master")]),e._v("分支是最稳定、最安全的分支，是现网环境运行的代码分支，一般不能直接在该分支上编写代码（万一改出问题那就麻烦了）。")]),e._v(" "),t("p",[e._v("日常开发应该在另一条分支上完成，我们把开发用的分支，叫做"),t("code",[e._v("dev-*")]),e._v("。")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 创建dev-20190331分支")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b dev-20190331 master\n")])])]),t("h2",{attrs:{id:"三、预发布分支release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、预发布分支release","aria-hidden":"true"}},[e._v("#")]),e._v(" 三、预发布分支release-*")]),e._v(" "),t("p",[e._v("当"),t("code",[e._v("dev-*")]),e._v("分支上的功能任务开发完，需要测试人员测试时，此时从"),t("code",[e._v("dev-*")]),e._v("上新建对应"),t("code",[e._v("release-*")]),e._v("分支，用于构建测试环境使用的git分支，通过测试后，将"),t("code",[e._v("release-*")]),e._v("分支合并到"),t("code",[e._v("master")]),e._v("分支。")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#创建release-20190331分支")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b release-21090331 dev-20190331\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 切换到master分支")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 对release-20190331分支进行合并")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" merge --no-ff release-20190331\n")])])]),t("h2",{attrs:{id:"四、重点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、重点","aria-hidden":"true"}},[e._v("#")]),e._v(" 四、重点")]),e._v(" "),t("p",[e._v("1 以开发新功能为例，讲解git流程")]),e._v(" "),t("ul",[t("li",[e._v("现在需要开发一个新功能，如添加一个“账户管理模块”，且该功能评估完成时间是2019年3月31号，从"),t("code",[e._v("master")]),e._v("分支新建分支"),t("code",[e._v("dev-20190331")]),e._v("；")]),e._v(" "),t("li",[e._v("当“账户管理模块”开发完成后，从"),t("code",[e._v("dev-20190331")]),e._v("分支上新建"),t("code",[e._v("release-20190331")]),e._v("分支用于构建测试环境（分支名称必须跟dev-20190331对应，表示该release分支是用于测试对应dev分支）；")]),e._v(" "),t("li",[e._v("测试过程可能会发现“账户管理模块”未达到原型需求或者有bug，此时应在"),t("code",[e._v("dev-20190331")]),e._v("分支上修改代码，然后合并到"),t("code",[e._v("release-20190331")]),e._v("分支 → 重新构建测试环境 → 再测试验证。直至开发的“账户管理模块”符合原型需求且没有bug，确认没问题后，合并到master分支；")]),e._v(" "),t("li",[e._v("发版master分支；")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/image/gitFlow01.jpg",alt:"git流程图",title:"图1"}})]),e._v(" "),t("p",[e._v("2 随着项目不断的开发，"),t("code",[e._v("dev-*")]),e._v("和"),t("code",[e._v("release-*")]),e._v("分支会越来越多，应该定期清理（注意，在删除分支之前应该确保该分支作用已经完成）")]),e._v(" "),t("p",[e._v("3 开发某种特定功能、新需求、优化，分支方向是：\n"),t("img",{attrs:{src:"/image/gitFlow02.jpg",alt:"git流程图",title:"图2"}})])])}],!1,null,null,null);a.default=v.exports}}]);