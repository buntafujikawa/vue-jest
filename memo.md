## 何をテストするか
[何をテストするかを知る](https://vue-test-utils.vuejs.org/ja/guides/#%E4%BD%95%E3%82%92%E3%83%86%E3%82%B9%E3%83%88%E3%81%99%E3%82%8B%E3%81%8B%E3%82%92%E7%9F%A5%E3%82%8B)

> UI コンポーネントでは、コンポーネントの内部実装の詳細に集中しすぎて脆弱なテストが発生する可能性があるため、完全なラインベースのカバレッジを目指すことはお勧めしません。
> 代わりに、コンポーネントのパブリックインターフェイスを検証するテストを作成し、内部をブラックボックスとして扱うことをお勧めします。単一のテストケースでは、コンポーネントに提供された入力（ユーザーのやり取りやプロパティの変更）によって、期待される出力（結果の描画またはカスタムイベントの出力）が行われることが示されます。 

- ボタンをクリックするとincrementされて、描画された値が1増える
- フォームに値を入力して、submitさせると描画させる値が変わる

## 構成
- ディレクトリ構成
> Jest は、テスト対象のコードのすぐ隣に__tests__ディレクトリを作成することを推奨していますが、適切にテストを構造化することは自由です。 Jest がスナップショットテストを実行するテストファイルの隣に__snapshots__ディレクトリを作成することに注意してください。
https://vue-test-utils.vuejs.org/ja/guides/#jest-%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%9F%E5%8D%98%E4%B8%80%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%83%86%E3%82%B9%E3%83%88

実際にはtestsとかに作っているものが多い気がする

- ファイル名は大文字始まりで書かれてる
https://github.com/vuejs/vue-test-utils-jest-example/blob/master/test/Message.spec.js

## common
- shallow mountは子コンポーネントをスタブする
- nextTick
https://jp.vuejs.org/v2/api/#Vue-nextTick  
https://vue-test-utils.vuejs.org/ja/guides/#%E3%81%AF%E3%81%98%E3%82%81%E3%82%8B  
 
Vue が何らかの状態変更をトリガした後に Vue が実際の DOM 更新を実行するまで待つ
→VueがDOMを更新する前にアサーションが実行される場合がある

- mockするとき
https://vue-test-utils.vuejs.org/ja/api/options.html#mocks

- flush promises
Flush all pending resolved promise handlers. Useful in tests.  
https://github.com/kentor/flush-promises

- ライフサイクルフックを実行したくない時には、callを使うパターンがかけそう
computedやemitなどはただのjsのオブジェクトなので、

## Finding Elements
- querySelectorのsyntaxで記載できる
- nameでfindできるので、コンポーネントにnameをつけとくと良いのか(`find({ name: "Child" })`)
- findAllはv-forとかで複数レンダリングされる場合に使える

## props
## computed
- shallowMountだとレンダーしないので、vueはpropsをthisにバインドしない  
そのため、thisを細かく設定したい場合やライフサイクルフックを実行したくない場合にはcallを使用する

## Expect methods
- toBeFalsy
> In JavaScript, there are six falsy values: false, 0, '', null, undefined, and NaN. Everything else is truthy.
https://jestjs.io/docs/en/expect#tobefalsy
