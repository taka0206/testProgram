import {
    Component,
    Input,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from "@angular/core";

@Component({
    selector: "child",  // 挿入先のHTMLタグ名
    template: `
    <p>子コンポーネント</p>
    <!-- 片方向データバインドで、getNowメソッドを呼び出して現在時刻を表示する -->
    <p>登録時刻:{{getNow()}}</p>
    <!-- ディレクティブngIfの条件式、*ngIf = "childValue > 0"の記述により、childValueの値が0の時はHTMLを出力しない -->
    <!-- 片方向データバインドでformat()メソッドを呼び出して、childValue変数で受け取った親コンポーネントからのデータに書式を付けて表示する -->
    <p *ngIf="childValue > 0">書式付金額 {{format()}}</p>
    `,
    styles: [`p{font-size:2rem;}`]
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    // 外部からデータを受け入れるプロパティ定義
    @Input() childValue: number;

    constructor() {
        console.log("@@@constructor");
    }

    //現在時刻の取得
    getNow() {
        console.log("@@@getNow");
        return (new Date()).toLocaleTimeString();
    }

    //数値の前に￥マーク、後に－を付ける
    format():string{
        console.log("@@@format");
        return "\\"+ String(this.childValue)+"-"
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
