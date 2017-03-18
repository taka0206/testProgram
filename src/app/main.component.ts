import {Component} from "@angular/core";
// ルーティング対象のコンポーネントクラスをimportする.
import {Page02Component} from "./page02.component";
import {Page01Component} from "./page01.component";

// ルート定義（ROUTE）を外部へ公開.
// この定義は、URLパスがルートの時はPage01Component、/page02の時はPage02Componentコンポーネントを表示する
// 宣言を行っている
export const ROUTES = [
    {path: "page02", component: Page02Component},
    {path: "", component: Page01Component}
]

@Component({
    // index.htmlのbodyタグにMainComponentを挿入する
    selector: "body",
    // ルータが選択したコンポーネントの出力先<router-outlet></router-outlet>を準備
    // このタグの下の行に出力される
    template: "<router-outlet></router-outlet>"
})
// ベースコンポーネントとしてMainComponentクラスを定義する
export class MainComponent {

    constructor() {
        console.log("@@@constructor");
    }

    ngOnChanges() {
        console.log("@@@ngOnChanges");
    }

    ngOnInit() {
        console.log("@@@ngOnInit");
    }

    ngDoCheck() {
        console.log("@@@ngDoCheck");
    }

    ngAfterContentInit() {
        console.log("@@@ngAfterContentInit");
    }

    ngAfterContentChecked() {
        console.log("@@@ngAfterContentChecked");
    }

    ngAfterViewInit() {
        console.log("@@@ngAfterViewInit");
    }

    ngAfterViewChecked() {
        console.log("@@@ngAfterViewChecked");
    }

    ngOnDestroy() {
        console.log("@@@ngOnDestroy");
    }

}
