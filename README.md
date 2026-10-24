# おなか日和 — 腸活タイプ診断（試作品）

スマートフォン向けの、日本語の生活習慣振り返りアプリです。医学的な診断や体質の断定はしません。質問・5タイプ・配点はすべて仮のデモです。

## GitHubで確認・ダウンロードする方へ

このブランチは、作成済みの試作品一式をレビューするためのものです。mainへの反映は行っていません。下にある過去の「pushは実行していません」という記述は、試作作成時点の記録です。

- Pull Requestの **Files changed** で、追加されるファイルを確認できます。
- GitHubの **Code** 画面でブランチを `codex/onaka-biyori-prototype` に切り替えると、この試作品のファイルが表示されます。
- その状態で緑色の **Code → Download ZIP** を選ぶと、mainへ反映せずにファイルをダウンロードできます。
- ZIPを展開し、`onaka-biyori-preview.html` をChromeで開いてください。直接表示が管理ポリシーなどで制限される場合は、下記のHTTP方式をご利用ください。
- Pull Requestを作成しただけではmainは変わりません。確認中は **Merge pull request** を押さないでください。

## プレビューの読み込みエラーについて（2026年10月24日追記）

確認時、クラウド環境はオンラインで、アプリのファイルも存在しました。前回の一時HTTPサーバーは終了しており、インターネットから開ける公開URL・ポート転送は作成されていません。クラウドのファイルパスや、クラウド内の localhost を、お使いのChromeでそのまま開くことはできません。表示された「クラウドファイルを読み込めませんでした」というエラーの、Codex側の内部原因は確認できていません。

### 最も手軽な方法：1ファイル版をパソコンに保存する

1. `onaka-biyori-preview.html` をパソコンの「ダウンロード」フォルダーなどに保存してください。チャット内のファイル表示で失敗する場合は、Codexのファイル一覧でこのファイルまたはZIP一式をダウンロードしてください。
2. ZIPの場合は先に展開してください。
3. Chromeを開き、保存した `onaka-biyori-preview.html` をChromeのウィンドウにドラッグしてください。「プログラムから開く」→「Google Chrome」でも開けます。
4. ニックネームと年代を入力し、診断を開始します。

これは既存のHTML・CSS・JavaScriptをまとめたファイルです。デザイン・質問・採点は元のアプリと同じです。通常はサーバー起動やインストールを必要としません。

### 会社などの管理されたChromeで直接開けない場合

管理ポリシーで `file://` が禁止されている場合は、ポリシーを変更せず、以下のHTTP方式を使用します。今回のクラウド内Chromiumでも直接ファイル表示は禁止されていたため、HTTP方式で動作確認しました。

1. ZIP一式を**ご自身のパソコン**に保存・展開します。
2. Python 3を使用できることを確認します。
3. 展開した `chokatsu-shindan-app` フォルダーでターミナルを開きます。Windowsではフォルダー内の空白部分を右クリックし「ターミナルで開く」を選べます。
4. `python3 -m http.server 8000 --bind 127.0.0.1` を実行します。Windowsでは `py -m http.server 8000 --bind 127.0.0.1` が使えます。
5. Chromeのアドレス欄に `http://localhost:8000/onaka-biyori-preview.html` と入力します。
6. 使用中はターミナルを開いたままにします。終了するときはターミナルで Ctrl+C を押します。

この localhost は、コマンドを実行したパソコン自身を指します。クラウド内でコマンドを実行した場合、ご自身のパソコンからこのURLで開くことはできません。スマートフォンと共有する場合は、後述のGitHub Pagesの手順をご利用ください。

### 今回の検証と変更範囲

- 元の `index.html`・`style.css`・`app.js`・`config.js`・`quiz.js` は変更していません。
- `onaka-biyori-preview.html` と生成用 `scripts/build-preview.py` を追加しました。
- 元のアプリと1ファイル版を、HTTP経由のChromiumで操作確認しました。15問・戻る・結果・再診断、幅320/390px、外部通信なしを確認しています。元の判定テストも成功しています。
- 1ファイル版の直接ファイル表示はクラウドブラウザの管理ポリシーでブロックされたため、未検証です。ご自身のChromeでの表示や、Codexのダウンロード操作の成功までは確認できていません。
- 質問などを編集した後は `python3 scripts/build-preview.py` を実行して1ファイル版を再生成してください。
- 公開URLの作成やGitHubへのpushは実行していません。

## プレビュー方法

このフォルダーで次を実行します（Python 3が必要）。

```sh
python3 -m http.server 8000
```

パソコンのブラウザで http://localhost:8000 を開いてください。Node.jsがある場合は `npm run dev` でも起動できます。依存パッケージのインストール・ビルドは不要です。

スマートフォンはパソコンと同じWi-Fiにつなぎ、ブラウザで `http://パソコンのLAN内IPアドレス:8000` を開きます。OSのファイアウォールが表示された場合は、自宅など信頼できるネットワークの範囲で許可してください。開けない場合もGitHub Pagesに掲載すればスマートフォンから利用できます。

## 使い方

1. ニックネーム（20文字以内）と年代を選びます。「回答しない」も選べます。
2. 1画面1問、全15問に5段階で回答します。タップで次へ進み、「前の質問に戻る」で修正できます。
3. 結果に仮の1タイプと生活習慣のヒントを表示します。
4. 「もう一度診断する」で入力・回答を消し、最初から開始できます。

## 編集方法

`config.js` だけで次の内容を変更できます。

- `questions`: 質問文 `text` と集計先のタイプID `type`。各タイプに最低1問を割り当ててください。
- `types`: タイプ名 `name`、質問画面の分類名 `short`、説明 `description`、ヒント `tips`。
- `answers`: 5段階の回答文言（5項目）。
- `score`: 回答1〜5の配点（5つの数値）。初期値は `[0,1,2,3,4]`。
- `consultationUrl`: 個別相談のURL。例 `https://example.com/consultation`。初期値の空文字では「準備中」と表示し、遷移しません。http/httpsのみ対応します。

タイプごとに割り当てられた質問の点数の**平均**を計算し、最高点のタイプを1つ表示します。同点の場合は `types` の並び順で先にあるタイプを表示します。年代・ニックネームは採点に使用しません。このルールに医学的な根拠はありません。

設定変更後は、下記テストや実際の回答操作で内容の整合性を確認してください。15問・5タイプの数を変えた場合はテストの期待値も見直してください。

## プライバシー

入力・回答はJavaScriptのメモリー内だけで扱います。Cookie、localStorage、sessionStorage、アクセス解析、外部フォント、外部APIは使用しません。更新・タブを閉じる・再診断で入力と回答は消えます。相談先リンクに入力・回答を付加しません。

通常のHTML・CSS・JS配信のアクセスログは、ホスティング事業者側で記録される場合があります。設定後の相談先サイトでは、そのサイトの取り扱い方針が適用されます。

## 動作確認

Node.js 18以降で次を実行します。

```sh
npm test
node --check app.js
node --check config.js
```

判定テスト: 5タイプそれぞれの選出、同点、未回答・不正値、配点変更を確認済み。

Chromiumでの操作確認: ニックネームの空白入力、15問の自動遷移、戻った際の選択保持、結果、ニックネームのHTMLエスケープ、相談先未設定、最後の質問への戻り、再診断、再読み込み、保存領域を使わないこと、外部への通信がないこと、幅320px/390pxで横はみ出しがないことを確認済みです。iPhone・Androidの実機検証は未実施です。

`preview-mobile.png`、`preview-desktop.png`、`preview-result.png` は確認時のスクリーンショットです。

## GitHubへの反映方法

作業フォルダーは `chokatsu-shindan-app`、既存の接続先は https://github.com/kayocchi/chokatsu-shindan-app.git です。この試作ではGitHubへのpushは実行していません。

内容を確認したうえで、フォルダーで次を実行してください。

```sh
git status
git add index.html style.css app.js config.js quiz.js package.json tests README.md .gitignore preview-mobile.png preview-desktop.png preview-result.png
git commit -m "Add mobile-friendly gut habit quiz prototype"
git push origin HEAD
```

GitHubの認証を求められた場合は、ご自身の通常のGitHub認証方法を使用してください。

### GitHub Pagesでスマートフォンから開く

1. GitHubリポジトリの **Settings → Pages** を開きます。
2. **Source** を **Deploy from a branch** に設定します。
3. 反映したブランチ（通常は `main`）と **/(root)** を選択して **Save** を押します。
4. GitHubの公開処理が完了したら、Pages欄に表示されるURLを開きます。

このリポジトリ名の通常のURLは https://kayocchi.github.io/chokatsu-shindan-app/ です。設定・デプロイ完了前は利用できません。GitHub Pagesの公開範囲はアカウント・リポジトリの設定に依存します。

## ファイル構成

- `index.html`: HTMLとSVGの腸キャラクター
- `style.css`: レスポンシブデザイン
- `config.js`: 質問・タイプ・配点・相談先URL
- `quiz.js`: 判定処理
- `app.js`: 入力・質問・結果画面と画面遷移
- `tests/quiz.test.cjs`: 判定テスト

追加のサーバー処理・データベースは不要です。
