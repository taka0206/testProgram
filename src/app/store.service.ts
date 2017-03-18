// DIを行うため、Injectableデコレータをimportする.f
import {Injectable} from "@angular/core";

// データ共有サービスの定義
// @INjectableデコレータ宣言をする
@Injectable()
// StoreServiceクラスとして公開する
export class StoreService {

    //画面間の共通データ
    // sharedData変数が画面間の共通データを保持する.
    // その値を読み書きするメソッドがwriteStore()とreadStore()となる
    sharedData = 0;

    constructor() {
        console.log("@@@constructor");
    }

    //受け取った値を保存
    writeStore(num: number) {
        console.log("@@@writeStore");
        this.sharedData = num;
    }

    //保存した値を読み取り
    readStore(): number {
        console.log("@@@readStore");
        return this.sharedData;
    }
}


