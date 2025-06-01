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
						<Button variant="outline" size="sm">
							お問い合わせ
						</Button>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="px-6 py-20 text-center lg:px-8">
				<div className="mx-auto max-w-4xl">
					<div className="mb-8 flex items-center justify-center gap-2">
						<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
							<span className="text-sm font-bold text-white">PS</span>
						</div>
						<Badge
							variant="secondary"
							className="bg-blue-50 text-blue-700 border-blue-200"
						>
							PairSpace 共同名義専門サービス
						</Badge>
					</div>
					<h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
						<span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
							PairSpace
						</span>
						で実現する
						<br />
						ふたりの理想の住まい
					</h1>
					<p className="mb-8 text-lg leading-8 text-slate-600 sm:text-xl">
						<span className="font-semibold text-blue-600">PairSpace</span>
						は同棲カップル向けの共同名義賃貸サービス。
						<br />
						両方の家賃補助を活用して、ワンランク上の住環境を手に入れませんか？
					</p>
					<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Button
							size="lg"
							className="text-lg px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
						>
							無料相談を予約する
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="text-lg px-8 py-3 border-blue-200 text-blue-700 hover:bg-blue-50"
						>
							サービス詳細
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
							借りる側も貸す側も、みんなにメリットがあります
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
										</Badge>{" "}
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
							PairSpaceのサービス流れ
						</h2>
						<p className="text-lg text-slate-600">
							シンプルな3ステップで理想の住まいを実現
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-3">
						<div className="text-center">
							<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-green-600 text-xl font-bold text-white">
								1
							</div>
							<h3 className="mb-2 text-lg font-semibold text-slate-900">
								無料相談・ヒアリング
							</h3>
							<p className="text-sm text-slate-600">
								お二人の条件や予算、家賃補助の詳細をお聞かせください
							</p>
						</div>

						<div className="text-center">
							<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-green-600 text-xl font-bold text-white">
								2
							</div>
							<h3 className="mb-2 text-lg font-semibold text-slate-900">
								最適物件のご提案
							</h3>
							<p className="text-sm text-slate-600">
								家賃補助を最大限活用できる物件を厳選してご提案
							</p>
						</div>

						<div className="text-center">
							<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-green-600 text-xl font-bold text-white">
								3
							</div>
							<h3 className="mb-2 text-lg font-semibold text-slate-900">
								契約手続きサポート
							</h3>
							<p className="text-sm text-slate-600">
								PairSpace専門スタッフが共同名義契約の複雑な手続きをフルサポート
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
						今すぐ見つけませんか？
					</h2>
					<p className="mb-8 text-lg text-blue-100">
						PairSpace専門コンサルタントが無料でご相談に応じます。
						<br />
						お気軽にお問い合わせください。
					</p>
					<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Button
							size="lg"
							className="text-lg px-12 py-4 bg-white text-blue-600 hover:bg-blue-50"
						>
							無料相談を予約する
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="text-lg px-8 py-4 bg-white/10 backdrop-blur border-white/50 text-white hover:bg-white/20 hover:border-white/70"
						>
							資料請求
						</Button>
					</div>
					<p className="mt-6 text-sm text-blue-100">
						相談は完全無料。しつこい営業は一切ありません。
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
