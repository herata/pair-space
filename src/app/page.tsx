import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
			{/* Header/Navigation */}
			<header className="px-6 py-6 lg:px-8">
				<div className="mx-auto max-w-6xl">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-green-600">
								<span className="text-xl font-bold text-white">PS</span>
							</div>
							<div>
								<h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
									PairSpace
								</h1>
								<p className="text-xs text-slate-600">共同名義専門賃貸仲介</p>
							</div>
						</div>
						<Button
							variant="outline"
							size="sm"
							className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
						>
							📱 LINE登録
						</Button>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="px-6 py-20 text-center lg:px-8">
				<div className="mx-auto max-w-4xl">
					<h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
						家賃補助を
						<span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent text-5xl">
							2倍
						</span>
						にして
						<br />
						憧れの物件に
					</h1>
					<p className="mb-8 text-lg leading-8 text-slate-600 sm:text-xl">
						同棲カップル必見！共同名義契約で両方の家賃補助を活用
						<br />
						<span className="font-semibold text-blue-600">
							月額5万円→10万円の家賃補助
						</span>
						も可能に
						<br />
						<span className="text-green-600 font-medium">
							🎁 LINE登録で限定情報をお届け
						</span>
					</p>
					<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Button
							size="lg"
							className="text-lg px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
						>
							📱 LINE友達追加で無料相談
						</Button>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="px-6 py-20 lg:px-8">
				<div className="mx-auto max-w-6xl">
					<div className="text-center mb-16">
						<div className="mb-4 flex items-center justify-center gap-2">
							<div className="h-6 w-6 rounded bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
								<span className="text-xs font-bold text-white">PS</span>
							</div>
							<span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
								PairSpace
							</span>
						</div>
						<h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
							PairSpaceが選ばれる理由
						</h2>
						<p className="text-lg text-slate-600">
							借りる側も貸す側もWin-Winな仕組み
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2">
						{/* For Tenants */}
						<Card className="border-2 border-blue-100 bg-blue-50/50">
							<CardHeader>
								<div className="flex items-center gap-3 mb-2">
									<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
										<span className="text-white font-bold text-sm">♡</span>
									</div>
									<CardTitle className="text-blue-900">
										借りる側のメリット
									</CardTitle>
								</div>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-3">
									<div className="flex items-start gap-3">
										<Badge variant="default" className="bg-blue-600">
											01
										</Badge>
										<div>
											<h4 className="font-semibold text-slate-900">
												両方の家賃補助を活用
											</h4>
											<p className="text-sm text-slate-600">
												共同名義契約により、カップル両方の家賃補助を受給可能
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<Badge variant="default" className="bg-blue-600">
											02
										</Badge>
										<div>
											<h4 className="font-semibold text-slate-900">
												ワンランク上の住まい
											</h4>
											<p className="text-sm text-slate-600">
												合計補助額により、より良い立地・設備の物件にアクセス
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<Badge variant="default" className="bg-blue-600">
											03
										</Badge>
										<div>
											<h4 className="font-semibold text-slate-900">
												専門サポート
											</h4>
											<p className="text-sm text-slate-600">
												PairSpace独自の共同名義手続きをプロがフルサポート
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* For Landlords */}
						<Card className="border-2 border-green-100 bg-green-50/50">
							<CardHeader>
								<div className="flex items-center gap-3 mb-2">
									<div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
										<span className="text-white font-bold text-sm">¥</span>
									</div>
									<CardTitle className="text-green-900">
										貸す側のメリット
									</CardTitle>
								</div>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-3">
									<div className="flex items-start gap-3">
										<Badge variant="default" className="bg-green-600">
											01
										</Badge>
										<div>
											<h4 className="font-semibold text-slate-900">
												家賃収入の最適化
											</h4>
											<p className="text-sm text-slate-600">
												二人目の家賃補助額の半分まで家賃を上げることが可能
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<Badge variant="default" className="bg-green-600">
											02
										</Badge>
										<div>
											<h4 className="font-semibold text-slate-900">
												利回りの向上
											</h4>
											<p className="text-sm text-slate-600">
												従来より高い家賃設定により投資効率が向上
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<Badge variant="default" className="bg-green-600">
											03
										</Badge>
										<div>
											<h4 className="font-semibold text-slate-900">
												安定した入居者
											</h4>
											<p className="text-sm text-slate-600">
												共働きカップルによる安定した家賃収入を確保
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Problem Section */}
			<section className="px-6 py-20 bg-slate-50 lg:px-8">
				<div className="mx-auto max-w-4xl">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
							こんなお悩み、ありませんか？
						</h2>
						<p className="text-lg text-slate-600">
							同棲カップルが直面する住まいの現実
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-2">
						<Card className="border-red-200 bg-red-50/50">
							<CardContent className="p-6">
								<div className="flex items-start gap-3">
									<div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
										<span className="text-red-600 font-bold text-sm">😰</span>
									</div>
									<div>
										<h3 className="font-semibold text-slate-900 mb-2">
											家賃補助が1人分だけ...
										</h3>
										<p className="text-sm text-slate-600">
											「二人とも家賃補助制度はあるのに、片方しか使えない」
											<br />
											共同名義じゃないと両方の補助は受けられません。
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="border-red-200 bg-red-50/50">
							<CardContent className="p-6">
								<div className="flex items-start gap-3">
									<div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
										<span className="text-red-600 font-bold text-sm">🏠</span>
									</div>
									<div>
										<h3 className="font-semibold text-slate-900 mb-2">
											妥協した物件選び
										</h3>
										<p className="text-sm text-slate-600">
											「本当はもっと良い立地に住みたいけど、予算的に無理...」
											<br />
											1人分の補助では選択肢が限られます。
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="border-red-200 bg-red-50/50">
							<CardContent className="p-6">
								<div className="flex items-start gap-3">
									<div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
										<span className="text-red-600 font-bold text-sm">📋</span>
									</div>
									<div>
										<h3 className="font-semibold text-slate-900 mb-2">
											複雑な共同名義手続き
										</h3>
										<p className="text-sm text-slate-600">
											「共同名義って難しそう...」
											<br />
											専門知識なしでは手続きが複雑で時間がかかります。
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="border-red-200 bg-red-50/50">
							<CardContent className="p-6">
								<div className="flex items-start gap-3">
									<div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
										<span className="text-red-600 font-bold text-sm">🏘️</span>
									</div>
									<div>
										<h3 className="font-semibold text-slate-900 mb-2">
											対応物件が見つからない
										</h3>
										<p className="text-sm text-slate-600">
											「共同名義OK物件がなかなか見つからない...」
											<br />
											一般的な賃貸仲介では対応が限定的です。
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Solution Section */}
			<section className="px-6 py-20 bg-gradient-to-r from-green-50 to-blue-50 lg:px-8">
				<div className="mx-auto max-w-4xl">
					<div className="text-center mb-16">
						<Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
							解決策
						</Badge>
						<h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
							PairSpaceならすべて解決！
						</h2>
						<p className="text-lg text-slate-600">
							LINE登録で専門サポートをお手軽に
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2">
						<Card className="border-green-200 bg-white">
							<CardContent className="p-6">
								<div className="flex items-start gap-3">
									<div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
										<span className="text-white font-bold">✓</span>
									</div>
									<div>
										<h3 className="font-semibold text-slate-900 mb-2 text-lg">
											家賃補助を2倍活用
										</h3>
										<p className="text-slate-600 mb-3">
											共同名義契約で両方の家賃補助をフル活用。月額10万円の補助も実現可能。
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="border-green-200 bg-white">
							<CardContent className="p-6">
								<div className="flex items-start gap-3">
									<div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
										<span className="text-white font-bold">✓</span>
									</div>
									<div>
										<h3 className="font-semibold text-slate-900 mb-2 text-lg">
											専門サポート体制
										</h3>
										<p className="text-slate-600 mb-3">
											共同名義の複雑な手続きを専門スタッフが完全サポート。LINEで気軽に相談OK。
										</p>
										<Badge
											variant="outline"
											className="text-green-600 border-green-200"
										>
											📱 LINE相談無料
										</Badge>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* LINE Benefits Section */}
			<section className="px-6 py-20 bg-green-50 lg:px-8">
				<div className="mx-auto max-w-5xl">
					<div className="text-center mb-16">
						<div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full">
							<span className="text-lg">📱</span>
							<span className="font-semibold">LINE友達追加限定</span>
						</div>
						<h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
							今なら特別特典をプレゼント！
						</h2>
						<p className="text-lg text-slate-600">
							LINE登録するだけで、これらの特典が無料で受け取れます
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-3">
						<Card className="border-green-200 bg-white text-center">
							<CardContent className="p-6">
								<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
									<span className="text-2xl">🏠</span>
								</div>
								<h3 className="font-semibold text-slate-900 mb-2 text-lg">
									優先物件情報
								</h3>
								<p className="text-sm text-slate-600 mb-4">
									共同名義対応の優良物件を一般公開前にLINEで優先配信。人気物件を他の人より早く確認できます。
								</p>
								<Badge className="bg-green-600 text-white">
									LINE限定配信！
								</Badge>
							</CardContent>
						</Card>

						<Card className="border-green-200 bg-white text-center">
							<CardContent className="p-6">
								<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
									<span className="text-2xl">💬</span>
								</div>
								<h3 className="font-semibold text-slate-900 mb-2 text-lg">
									個別コンサル予約権
								</h3>
								<p className="text-sm text-slate-600 mb-4">
									専門コンサルタントとの1対1相談を優先予約。あなたの状況に合わせたオーダーメイドアドバイス。
								</p>
								<Badge className="bg-green-600 text-white">
									もちろん無料！
								</Badge>
							</CardContent>
						</Card>
					</div>

					<div className="text-center mt-12">
						<Button
							size="lg"
							className="text-lg px-12 py-4 bg-green-600 hover:bg-green-700"
						>
							今すぐLINE登録して特典を受け取る
						</Button>
						<p className="mt-4 text-sm text-slate-500">
							即ブロックOK！しつこい勧誘一切なし！
						</p>
					</div>
				</div>
			</section>

			{/* Success Stories Section */}
			{/* <section className="px-6 py-20 lg:px-8">
				<div className="mx-auto max-w-5xl">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
							実際のご利用者様の声
						</h2>
						<p className="text-lg text-slate-600">
							PairSpaceで理想の住まいを実現したカップルの体験談
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2">
						<Card className="border-blue-200 bg-blue-50/30">
							<CardContent className="p-6">
								<div className="flex items-center gap-4 mb-4">
									<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
										<span className="text-blue-600 font-bold">A</span>
									</div>
									<div>
										<h4 className="font-semibold text-slate-900">Aさんカップル</h4>
										<p className="text-sm text-slate-600">IT企業勤務・公務員</p>
									</div>
								</div>
								<div className="space-y-3">
									<div className="bg-white p-4 rounded-lg">
										<p className="text-sm text-slate-600 mb-2">
											「二人とも月4万円の家賃補助があったのに、今まで1人分しか使えてませんでした。PairSpaceさんのおかげで<span className="font-semibold text-blue-600">月8万円の補助</span>を活用して、憧れの港区のマンションに住めるように！」
										</p>
									</div>
									<div className="flex justify-between text-sm">
										<span className="text-slate-500">before: 家賃8万円</span>
										<span className="text-blue-600 font-semibold">after: 家賃15万円</span>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="border-green-200 bg-green-50/30">
							<CardContent className="p-6">
								<div className="flex items-center gap-4 mb-4">
									<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
										<span className="text-green-600 font-bold">B</span>
									</div>
									<div>
										<h4 className="font-semibold text-slate-900">Bさんカップル</h4>
										<p className="text-sm text-slate-600">メーカー勤務・銀行員</p>
									</div>
								</div>
								<div className="space-y-3">
									<div className="bg-white p-4 rounded-lg">
										<p className="text-sm text-slate-600 mb-2">
											「共同名義の手続きが不安でしたが、LINEで親身にサポートしてもらえました。<span className="font-semibold text-green-600">月6万円×2人の補助</span>で念願の新築マンションに入居できて感謝しています！」
										</p>
									</div>
									<div className="flex justify-between text-sm">
										<span className="text-slate-500">before: 家賃10万円</span>
										<span className="text-green-600 font-semibold">after: 家賃18万円</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					<div className="text-center mt-12">
						<div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full">
							<span className="text-lg">⭐⭐⭐⭐⭐</span>
							<span className="font-semibold text-slate-900">満足度 98%</span>
							<span className="text-slate-600">（2024年利用者アンケート結果）</span>
						</div>
					</div>
				</div>
			</section> */}

			{/* How It Works */}
			<section className="px-6 py-20 bg-gradient-to-r from-blue-50/50 to-green-50/50 lg:px-8">
				<div className="mx-auto max-w-4xl">
					<div className="text-center mb-16">
						<div className="mb-4 flex items-center justify-center gap-2">
							<div className="h-6 w-6 rounded bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
								<span className="text-xs font-bold text-white">PS</span>
							</div>
							<span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
								PairSpace
							</span>
						</div>
						<h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
							LINEで始める簡単3ステップ
						</h2>
						<p className="text-lg text-slate-600">
							スマホ1つで理想の住まいを実現
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-3">
						<div className="text-center">
							<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-blue-600 text-xl font-bold text-white">
								📱
							</div>
							<h3 className="mb-2 text-lg font-semibold text-slate-900">
								LINE友達追加
							</h3>
							<p className="text-sm text-slate-600">
								即ブロックOK！しつこい勧誘一切なし！
							</p>
						</div>

						<div className="text-center">
							<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-blue-600 text-xl font-bold text-white">
								💬
							</div>
							<h3 className="mb-2 text-lg font-semibold text-slate-900">
								LINEで無料相談
							</h3>
							<p className="text-sm text-slate-600">
								お二人の条件や家賃補助をLINEで気軽にご相談
							</p>
						</div>

						<div className="text-center">
							<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-blue-600 text-xl font-bold text-white">
								🏠
							</div>
							<h3 className="mb-2 text-lg font-semibold text-slate-900">
								理想の住まい実現
							</h3>
							<p className="text-sm text-slate-600">
								専門サポートで共同名義契約から入居まで完全サポート
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="px-6 py-24 text-center lg:px-8 bg-gradient-to-br from-blue-600 to-green-600 text-white">
				<div className="mx-auto max-w-3xl">
					<div className="mb-6 flex items-center justify-center gap-3">
						<div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
							<span className="text-xl font-bold">PS</span>
						</div>
						<span className="text-2xl font-bold">PairSpace</span>
					</div>
					<h2 className="mb-6 text-3xl font-bold sm:text-4xl">
						ふたりの理想の住まいを
						<br />
						今すぐLINEで相談しませんか？
					</h2>
					<p className="mb-8 text-lg text-blue-100">
						PairSpace専門コンサルタントがLINEで無料相談を承ります。
						<br />
						まずは気軽にお友達追加から！
					</p>
					<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Button
							size="lg"
							className="text-lg px-12 py-4 bg-white text-green-600 hover:bg-green-50"
						>
							📱 LINE友達追加（無料）
						</Button>
					</div>
					<p className="mt-6 text-sm text-blue-100">
						スマホ1つで簡単登録！営業メッセージは一切ありません。
					</p>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t bg-slate-50 px-6 py-12 lg:px-8">
				<div className="mx-auto max-w-6xl">
					<div className="text-center">
						<div className="mb-4 flex items-center justify-center gap-3">
							<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
								<span className="text-lg font-bold text-white">PS</span>
							</div>
							<div>
								<h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
									PairSpace
								</h3>
								<p className="text-xs text-slate-600">
									共同名義専門賃貸仲介サービス
								</p>
							</div>
						</div>
						<p className="text-sm text-slate-500 mt-4">
							© 2025 PairSpace. すべての権利を保有しています。
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
