import {
    Component,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from "@angular/core"; // コンポーネントのイベントを取得するインタフェース
import {CalcService} from "./calc.service"; // コンポーネントにDIするサービス
import {CounterService} from "./counter.service"; // コンポーネントにDIするサービス

// コンポーネントの構成情報を定義
@Component({
    // コンポーネントの出力先のHTML要素名をpage01に設定
    selector: "page01",
    // HTMLテンプレートの定義をここに記述　templateの代わりにtemplateUrlを使用すると、外部ファイルに記述できる
    template: `
        <p>親コンポーネント（1/2）</p>
        <!-- 入力欄と変数value01を双方向データバインドしている -->
        <p><input type="text" [(ngModel)]="value01" /></p>
        <!-- value01の値を片方向データバインドで表示する. 入力された値と同じになる -->
        <p >入力金額　{{value01}}</p>
        <!-- calcメソッドの戻り値（税込み金額）を片方向データバインドで表示する -->
        <p>税込金額　{{calc()}}</p>   
        <!-- counterService.counter変数の値（閲覧回数）を片方向データバインドで表示する -->
        <p>閲覧回数　{{counterService.counter}}</p>
        <!--<p>閲覧回数　{{counterService.getCounter()}}</p>-->
        <!-- 2ページ目に画面遷移するルータ用リンク -->
        <p><a routerLink="/page02">2ページ目へ</a></p>
        <hr/>
        <!--子コンポーネント出力先-->
        <!-- 子コンポーネントのchildValueプロパティに、value01の値を渡す -->
        <!-- HTMLテンプレートに子コンポーネント挿入のchildタグを定義する -->
        <!-- childValueプロパティに変数value01を代入する。入力欄と同期した値が子コンポーネントに渡される -->
        <child [childValue]="value01"></child>
`,
    // CSSの定義。stylesの代わりにstyleUrlsを使用すると外部ファイルに記述できる
    styles: [
        `p,input{
            font-size:2rem;
            color:blue;
        }`]
})
// コンポーネントクラスを定義する
// implementの後はイベントを取得するためのインタフェース.
export class Page01Component implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    // 金額入力欄と双方向データバインドするメンバ変数value01を定義
    value01 = 0; //データバインドする変数

    // コンストラクタでCalcServiceとCounterServiceをDI
    constructor(private calcService: CalcService,//CalcService DI
                public counterService: CounterService) { //CounterService DI
        console.log("@@@constructor");
    }

    //CalcServiceを使った計算
    calc(): number {
        console.log("@@@calc");
        return this.calcService.addTax(this.value01);
    }

    // コンポーネント初期化完了時に呼び出されるメソッド
    // コンポーネントは表示のたびに初期化されるので、ここで閲覧数のカウントを+1している
    ngOnInit() {
        console.log("@@@ngOnInit");
        this.counterService.counter++; //コンポーネント生成時に閲覧回数加算
    }

    ngOnChanges() {
        console.log("@@@ngOnChanges");
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
