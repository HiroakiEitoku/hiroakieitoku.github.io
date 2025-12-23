<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>エンジニアとPdMの共創ガイドライン：グロース期のプロダクト思考</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet">
    
    <!-- Palette: Energetic Blue & Orange -->
    <!-- Primary: #1e40af (Blue 800) -->
    <!-- Secondary: #f97316 (Orange 500) -->
    <!-- Accent: #0ea5e9 (Sky 500) -->
    <!-- Background: #f8fafc (Slate 50) -->
    
    <!-- Narrative Plan Summary:
    1. Introduction: Define the shift from 0->1 to 1->100 and the danger of the "Feature Factory".
    2. Mindset: Visualize the "Mercenary vs. Missionary" gap using a Radar Chart covering the 4 Risks.
    3. Lessons: Use a Scatter Plot to map famous case studies (RethinkDB, Slack, Segment) on "Tech Novelty vs. Business Outcome".
    4. Domain Physics: Demonstrate "Liquidity" and "Information Asymmetry" via a Hiring Funnel Chart.
    5. Resources: Visualize "Innovation Tokens" using a Donut Chart to show budget allocation.
    6. Action: HTML-based checklist for the Issue Review process.
    -->

    <!-- Chart Selection Justification:
    1. Mercenary vs Missionary -> Radar Chart (Compare): Perfect for showing coverage area across 4 distinct risk dimensions. (NO SVG)
    2. Case Studies -> Scatter Plot (Relationships): Shows correlation between technical complexity and business success. (NO SVG)
    3. Hiring Liquidity -> Bar Chart/Funnel (Organize/Change): Visualizes drop-off rates and the impact of trust features. (NO SVG)
    4. Innovation Tokens -> Doughnut Chart (Inform): Shows limited resource allocation clearly. (NO SVG)
    -->

    <!-- HTML Comments confirming NO SVG and NO MERMAID JS used. Pure HTML/CSS and Canvas. -->

    <style>
        body {
            font-family: 'Noto Sans JP', sans-serif;
            background-color: #f8fafc;
            color: #1e293b;
        }
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            height: 350px;
            max-height: 400px;
        }
        .card {
            background-color: white;
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            padding: 1.5rem;
            transition: transform 0.2s;
        }
        .card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .gradient-text {
            background: linear-gradient(to right, #1e40af, #f97316);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .section-title {
            font-size: 1.875rem;
            font-weight: 700;
            color: #1e40af;
            margin-bottom: 1rem;
            border-bottom: 4px solid #f97316;
            display: inline-block;
            padding-bottom: 0.5rem;
        }
    </style>
</head>
<body class="antialiased">

    <!-- Header / Hook -->
    <header class="bg-white shadow-lg sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 class="text-2xl font-bold text-blue-800">エンジニアとPdMの共創ガイドライン</h1>
            <span class="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Growth Phase 1→100</span>
        </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

        <!-- Introduction Section -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
                <h2 class="text-4xl font-black mb-6 leading-tight">傭兵から<span class="text-orange-500">宣教師</span>へ。<br>技術を「武器」に、<br>プロダクトを勝利へ導け。</h2>
                <p class="text-lg text-slate-600 mb-6 leading-relaxed">
                    事業が「0→1」から「1→100」へ移行するグロース期、エンジニアリング組織には質的な転換が求められます。
                    ただ仕様書通りに作る「機能工場（Feature Factory）」に陥るのか、それとも顧客課題を解決するパートナーとして共創するのか。
                    このガイドラインは、エンジニアが技術的知見を「What（何を作るか）」の決定プロセスに注入するための羅針盤です。
                </p>
                <div class="flex gap-4">
                    <div class="bg-blue-50 border-l-4 border-blue-800 p-4 w-full">
                        <p class="font-bold text-blue-900">0→1 フェーズ</p>
                        <p class="text-sm text-blue-700">「動くものを作る」が正義。<br>カオスは許容される。</p>
                    </div>
                    <div class="bg-orange-50 border-l-4 border-orange-500 p-4 w-full">
                        <p class="font-bold text-orange-900">1→100 フェーズ</p>
                        <p class="text-sm text-orange-700">市場への迅速・的確な応答。<br>「言われたまま」は最大のリスク。</p>
                    </div>
                </div>
            </div>
            <div class="bg-gradient-to-br from-blue-800 to-blue-600 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-orange-500 rounded-full opacity-20 blur-2xl"></div>
                <h3 class="text-2xl font-bold mb-4">エンジニアの進化階層</h3>
                <ul class="space-y-4">
                    <li class="flex items-start">
                        <span class="text-2xl mr-3">💀</span>
                        <div>
                            <span class="font-bold block">Mercenaries (傭兵)</span>
                            <span class="text-blue-100 text-sm">「仕様が決まったら教えてくれ」<br>関心事：コードの美しさ、チケット消化</span>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <span class="text-2xl mr-3">🚀</span>
                        <div>
                            <span class="font-bold block text-orange-300">Missionaries (宣教師)</span>
                            <span class="text-blue-100 text-sm">「もっと簡単な解決策がある」<br>関心事：顧客の課題解決、ビジネス成果</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <!-- Visualization 1: The 4 Risks (Radar Chart) -->
        <section>
            <h2 class="section-title">4つのリスクへの関与</h2>
            <p class="mb-8 text-slate-600 max-w-3xl">
                仕様検討時、エンジニアは「作れるか（Feasibility）」だけに閉じこもってはいけません。
                『INSPIRED』が提唱する4つのリスク全てに対し、技術的な視点から意見（Feasibility Hack）を提示することで、
                手戻りを防ぎ、プロダクトの成功確率を高めることができます。
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Chart Section -->
                <div class="md:col-span-1 bg-white p-4 rounded-xl shadow-md border border-slate-100 flex flex-col justify-center items-center">
                    <h3 class="text-lg font-bold text-center mb-2 text-slate-700">エンジニアの守備範囲</h3>
                    <div class="chart-container">
                        <canvas id="risksRadarChart"></canvas>
                    </div>
                </div>
                
                <!-- Explanation Cards -->
                <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="card border-t-4 border-blue-500">
                        <h4 class="font-bold text-lg mb-2">① 価値のリスク (Value)</h4>
                        <p class="text-sm text-slate-600">「ユーザーはそれを選ぶか？」<br>非機能要件（検索速度など）は価値そのもの。結果0件になる検索仕様を止めるのはエンジニアの役目。</p>
                    </div>
                    <div class="card border-t-4 border-orange-500">
                        <h4 class="font-bold text-lg mb-2">② 使いやすさ (Usability)</h4>
                        <p class="text-sm text-slate-600">「ユーザーは使いこなせるか？」<br>実装都合の悪いUI（リロード強要、過多な入力）を指摘し、外部連携などの代替案を出す。</p>
                    </div>
                    <div class="card border-t-4 border-green-500">
                        <h4 class="font-bold text-lg mb-2">③ 実現可能性 (Feasibility)</h4>
                        <p class="text-sm text-slate-600">「作れるか？（コスト対効果）」<br>ただ作れるかではなく、運用コストや技術的負債（イノベーション・トークン）を考慮する。</p>
                    </div>
                    <div class="card border-t-4 border-purple-500">
                        <h4 class="font-bold text-lg mb-2">④ 事業実現性 (Viability)</h4>
                        <p class="text-sm text-slate-600">「ビジネスとして成立するか？」<br>法規制（GDPR/APPI）やセキュリティ要件。データの取り扱いが事業リスクにならないか。</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Visualization 2: Case Studies (Scatter Plot) -->
        <section>
            <h2 class="section-title">歴史に学ぶ：技術とビジネスの相関</h2>
            <p class="mb-8 text-slate-600">
                技術的に優れていることが、必ずしもビジネスの成功を意味しません。過去の事例（RethinkDB, Slack, Segment）は、
                エンジニアの自己満足（技術的崇高正）がプロダクトを殺す可能性と、「退屈な技術」が爆発的な価値を生む可能性を示しています。
            </p>

            <div class="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <div class="chart-container" style="max-width: 800px; height: 400px;">
                    <canvas id="caseStudyScatter"></canvas>
                </div>
                <div class="mt-4 text-xs text-slate-400 text-center">
                    ※ 縦軸：ビジネスインパクト（成功度） / 横軸：技術的新規性・複雑性（右に行くほどOver-engineeringのリスク）
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div class="p-4 bg-red-50 rounded-lg border border-red-100">
                    <h4 class="font-bold text-red-800">📉 RethinkDBの罠</h4>
                    <p class="text-sm text-red-700 mt-2">数学的な正しさや美しさを追求しすぎた。市場は「多少データが欠けても爆速で動くもの(MongoDB)」を求めていた。</p>
                </div>
                <div class="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 class="font-bold text-blue-800">📈 Slackのピボット</h4>
                    <p class="text-sm text-blue-700 mt-2">ゲーム開発(Glitch)への未練を断ち、社内で価値を生んでいた内部ツールに賭けた。ドッグフーディングの勝利。</p>
                </div>
                <div class="p-4 bg-green-50 rounded-lg border border-green-100">
                    <h4 class="font-bold text-green-800">✅ Segmentの発見</h4>
                    <p class="text-sm text-green-700 mt-2">「退屈なデータ統合」というエンジニアが嫌がる苦痛を解決。Boring Technology（枯れた技術）の戦略的活用。</p>
                </div>
            </div>
        </section>

        <!-- Visualization 3: Hiring Funnel & Liquidity (Bar/Funnel) -->
        <section>
            <h2 class="section-title">HR Techの物理法則：情報の非対称性</h2>
            <p class="mb-8 text-slate-600">
                採用サービスにおいて、エンジニアは「情報の非対称性」と「流動性（Liquidity）」をコードでコントロールします。
                信頼（Trust）のないプラットフォームは、どれだけ機能があってもマッチングしません。
            </p>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <!-- Funnel Chart -->
                <div class="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                    <h3 class="font-bold mb-4 text-center">信頼機能有無による応募ファンネル比較</h3>
                    <div class="chart-container">
                        <canvas id="hiringFunnelChart"></canvas>
                    </div>
                </div>

                <!-- Concept List -->
                <div class="space-y-6">
                    <div>
                        <h4 class="text-xl font-bold text-blue-900 mb-2">情報の非対称性 (Information Asymmetry)</h4>
                        <p class="text-slate-600 text-sm mb-2">企業と候補者の相互不信がコストを高める（レモン市場）。</p>
                        <div class="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                            <span class="font-bold text-blue-800">Action:</span>
                            <span class="text-sm text-blue-700">GitHub解析やスキルテスト結果など「検証されたシグナル」を表示し、給与レンジを透明化する。</span>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-orange-900 mb-2">流動性 (Liquidity) のトレードオフ</h4>
                        <p class="text-slate-600 text-sm mb-2">厳密すぎる検索は「結果0件」を招き、緩すぎると「ノイズ」が増える。</p>
                        <div class="bg-orange-50 p-3 rounded border-l-4 border-orange-500">
                            <span class="font-bold text-orange-800">Action:</span>
                            <span class="text-sm text-orange-700">0件時の「フォールバック（おすすめ表示）」ロジックを実装し、離脱を防ぐ。</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Visualization 4: Innovation Tokens (Doughnut Chart) -->
        <section>
            <h2 class="section-title">資源管理：イノベーション・トークン</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <p class="mb-4 text-slate-600">
                        「企業は数個（例えば3個）のイノベーション・トークン（新しい技術への挑戦権）しか持っていない」という概念です。
                        コアとなる競争力以外には、徹底的に「退屈な技術（Boring Technology）」を選ぶ勇気が必要です。
                    </p>
                    <ul class="space-y-3">
                        <li class="flex items-center p-3 bg-green-50 rounded-lg text-green-800">
                            <span class="font-bold mr-2">🟢 Good Use:</span>
                            マッチングアルゴリズム、独自のデータ解析（競争力の源泉）
                        </li>
                        <li class="flex items-center p-3 bg-red-50 rounded-lg text-red-800">
                            <span class="font-bold mr-2">🔴 Bad Use:</span>
                            チャットサーバーの自前実装（SaaSで良い）、流行りの独自フレームワーク
                        </li>
                    </ul>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-md flex justify-center">
                    <div class="chart-container">
                        <canvas id="innovationTokenChart"></canvas>
                    </div>
                </div>
            </div>
        </section>

        <!-- Final Section: Action Checklist -->
        <section class="bg-slate-800 text-white rounded-2xl p-8 shadow-2xl">
            <h2 class="text-2xl font-bold mb-6 text-orange-400 border-b border-slate-600 pb-4">第4部：共創の実践 —— Issue Review チェックリスト</h2>
            <p class="mb-8 text-slate-300">
                IssueはPdMからの命令書ではありません。市場で戦うための「作戦図」です。
                以下の観点でレビューし、コメントすることで、あなたは「宣教師」としての行動を開始できます。
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <!-- Step 1 -->
                <div class="bg-slate-700 p-4 rounded-lg border border-slate-600 hover:border-blue-400 transition">
                    <div class="text-blue-400 font-bold text-lg mb-2">01. Context & Why</div>
                    <p class="text-sm text-slate-300 mb-2">目的は明確か？ 機能を作ることが目的になっていないか？</p>
                    <p class="text-xs text-orange-300 italic">「この機能で指標が動かなかったら次はどうしますか？」</p>
                </div>
                <!-- Step 2 -->
                <div class="bg-slate-700 p-4 rounded-lg border border-slate-600 hover:border-blue-400 transition">
                    <div class="text-blue-400 font-bold text-lg mb-2">02. User Stories</div>
                    <p class="text-sm text-slate-300 mb-2">ペルソナは具体的か？ データがない時の表示（アンハッピーパス）は？</p>
                    <p class="text-xs text-orange-300 italic">「スキルがない候補者に対して、ネガティブに見えない表示にしませんか？」</p>
                </div>
                <!-- Step 3 -->
                <div class="bg-slate-700 p-4 rounded-lg border border-slate-600 hover:border-blue-400 transition">
                    <div class="text-blue-400 font-bold text-lg mb-2">03. Tech Approach</div>
                    <p class="text-sm text-slate-300 mb-2">複雑性の予算は守られているか？ パフォーマンスへの影響は？</p>
                    <p class="text-xs text-orange-300 italic">「今回はYAGNI原則で、別テーブルに切り出さず実装コストを抑えましょう」</p>
                </div>
                <!-- Step 4 -->
                <div class="bg-slate-700 p-4 rounded-lg border border-slate-600 hover:border-blue-400 transition">
                    <div class="text-blue-400 font-bold text-lg mb-2">04. Out of Scope</div>
                    <p class="text-sm text-slate-300 mb-2">「やらないこと」を決めたか？ MVPの境界線は明確か？</p>
                    <p class="text-xs text-orange-300 italic">「管理画面は作らず、まずはDB直接操作で運用カバーしませんか？」</p>
                </div>
            </div>
            
            <div class="mt-8 text-center">
                <p class="text-lg font-bold">技術的なリアリティと創造性を仕様に書き加えられるのは、あなたしかいない。</p>
            </div>
        </section>

    </main>

    <footer class="bg-white border-t border-slate-200 py-8 mt-12">
        <div class="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
            <p>© Engineer & PdM Co-creation Guidelines Infographic.</p>
            <p class="mt-2">Inspired by Marty Cagan's principles and modern Product Engineering practices.</p>
        </div>
    </footer>

    <script>
        // --- Utility: Label Wrapping Logic (16 char limit) ---
        function wrapLabel(label) {
            if (typeof label !== 'string' || label.length <= 16) return label;
            const words = label.split(' ');
            const lines = [];
            let currentLine = words[0];

            for (let i = 1; i < words.length; i++) {
                if (currentLine.length + 1 + words[i].length <= 16) {
                    currentLine += ' ' + words[i];
                } else {
                    lines.push(currentLine);
                    currentLine = words[i];
                }
            }
            lines.push(currentLine);
            return lines;
        }

        // --- Utility: Common Tooltip Config ---
        const commonTooltipConfig = {
            callbacks: {
                title: function(tooltipItems) {
                    const item = tooltipItems[0];
                    let label = item.chart.data.labels[item.dataIndex];
                    if (Array.isArray(label)) {
                        return label.join(' ');
                    } else {
                        return label;
                    }
                }
            }
        };

        // --- Chart 1: Radar Chart (Mercenary vs Missionary) ---
        const ctxRadar = document.getElementById('risksRadarChart').getContext('2d');
        new Chart(ctxRadar, {
            type: 'radar',
            data: {
                labels: ['価値のリスク (Value)', '使いやすさ (Usability)', '実現可能性 (Feasibility)', '事業性 (Viability)'].map(wrapLabel),
                datasets: [{
                    label: 'Mercenary (傭兵)',
                    data: [20, 30, 95, 20],
                    backgroundColor: 'rgba(148, 163, 184, 0.2)', // Slate 400
                    borderColor: 'rgba(148, 163, 184, 1)',
                    pointBackgroundColor: 'rgba(148, 163, 184, 1)',
                    borderWidth: 2
                }, {
                    label: 'Missionary (宣教師)',
                    data: [85, 80, 90, 85],
                    backgroundColor: 'rgba(249, 115, 22, 0.2)', // Orange 500
                    borderColor: 'rgba(249, 115, 22, 1)',
                    pointBackgroundColor: 'rgba(249, 115, 22, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: { color: '#e2e8f0' },
                        grid: { color: '#e2e8f0' },
                        pointLabels: {
                            font: { size: 11, family: "'Noto Sans JP', sans-serif" },
                            color: '#475569'
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                },
                plugins: {
                    legend: { position: 'bottom' },
                    tooltip: commonTooltipConfig
                }
            }
        });

        // --- Chart 2: Scatter Plot (Case Studies) ---
        const ctxScatter = document.getElementById('caseStudyScatter').getContext('2d');
        new Chart(ctxScatter, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: '成功事例 (Success)',
                    data: [
                        { x: 20, y: 90, label: 'Segment (Boring Tech)' },
                        { x: 40, y: 85, label: 'Slack (Internal Tool)' }
                    ],
                    backgroundColor: '#10b981', // Emerald 500
                    pointRadius: 8,
                    pointHoverRadius: 10
                }, {
                    label: '失敗/苦戦事例 (Failure/Struggle)',
                    data: [
                        { x: 90, y: 20, label: 'RethinkDB (High Tech)' },
                        { x: 80, y: 30, label: 'Friendster (Tech Debt)' }
                    ],
                    backgroundColor: '#ef4444', // Red 500
                    pointRadius: 8,
                    pointHoverRadius: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: { display: true, text: '技術的新規性・複雑性 (Technical Novelty)' },
                        min: 0, max: 100
                    },
                    y: {
                        title: { display: true, text: 'ビジネス成果 (Business Outcome)' },
                        min: 0, max: 100
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.raw.label;
                            }
                        }
                    },
                    legend: { position: 'bottom' }
                }
            }
        });

        // --- Chart 3: Hiring Funnel (Liquidity) ---
        const ctxFunnel = document.getElementById('hiringFunnelChart').getContext('2d');
        new Chart(ctxFunnel, {
            type: 'bar',
            data: {
                labels: ['検索実行 (Search)', '詳細閲覧 (View)', '応募完了 (Apply)'].map(wrapLabel),
                datasets: [{
                    label: '信頼機能なし (Low Trust)',
                    data: [1000, 200, 20], // High drop-off
                    backgroundColor: '#94a3b8', // Slate 400
                }, {
                    label: '信頼機能あり (High Trust)',
                    data: [1000, 450, 120], // Better conversion
                    backgroundColor: '#1e40af', // Blue 800
                }]
            },
            options: {
                indexAxis: 'y', // Horizontal bar to mimic funnel
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { beginAtZero: true }
                },
                plugins: {
                    title: {
                        display: true,
                        text: '情報の透明性が転換率に与える影響'
                    },
                    tooltip: commonTooltipConfig
                }
            }
        });

        // --- Chart 4: Innovation Tokens (Doughnut) ---
        const ctxToken = document.getElementById('innovationTokenChart').getContext('2d');
        new Chart(ctxToken, {
            type: 'doughnut',
            data: {
                labels: ['コア競争力 (Core: Matching AI)', '退屈な技術 (Boring: Rails/Postgres)', '無駄な複雑さ (Waste: Custom Chat)'].map(wrapLabel),
                datasets: [{
                    data: [20, 70, 10],
                    backgroundColor: [
                        '#f97316', // Orange (Innovation)
                        '#1e40af', // Blue (Stable)
                        '#cbd5e1'  // Slate (Waste/Risk)
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' },
                    title: {
                        display: true,
                        text: '理想的なトークン配分'
                    },
                    tooltip: commonTooltipConfig
                }
            }
        });
    </script>
</body>
</html>
