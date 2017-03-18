import {Injectable} from "@angular/core";

@Injectable()
// 閲覧回数サービスの定義
// このクラスは次の２つのタイミングで使用される
// 1. Page01Componentが、画面に表示されるたびにメンバ変数のcounterの値を+1する
// 2. Page02Componentが、閲覧回数を取得するときにメンバ変数のcounterの値を参照する.
export class CounterService {

    //閲覧回数を保持
    counter = 0;

    constructor() {
        console.log("@@@constructor");
    }

    //閲覧回数を加算して返す
    // データバインド動作確認用
    getCounter() {
        console.log("@@@getCounter");
        return this.counter++;
    }

}


