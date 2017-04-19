const data = [
    {
        id: 'home',
        name: '主页'
    },
    {
        id: 'news',
        name: '新闻',
        children: [
            [
                {
                    id: 'gsxw',
                    name: '公司新闻'
                },
                {
                    id: 'gsdt',
                    name: '公司动态'
                },
                {
                    id: 'hjyry',
                    name: '获奖与荣誉'
                },
                {
                    id: 'shhd',
                    name: '社会活动'
                },
                {
                    id: 'zhcy',
                    name: '展会参与'
                }, 
                {
                    id: 'mtbd',
                    name: '媒体报道'
                }
            ],
            [
                {
                    id: 'yjxw',
                    name: '业界新闻'
                },
                {
                    id: 'yjrd',
                    name: '行业热点'
                },
                {
                    id: 'zxal',
                    name: '最新案例'
                },
                {
                    id: 'zcjd',
                    name: '政策解读'
                }
            ]
        ]
    },
    {
        id: 'industry',
        name: '行业',
        children: [
            [
                {
                    id: 'police',
                    name: '公安'
                },
                {
                    id: 'aviation',
                    name: '航空'
                },
                {
                    id: 'smartCity',
                    name: '智慧城市'
                }
            ]
        ]
    },
    {
        id: 'product',
        name: '产品',
        children: [
            [
                {
                    id: 'tueasyPlane',
                    name: '图易生态平台'
                },
                {
                    id: 'tueasy',
                    name: '图易'
                }, 
                {
                    id: 'zhijing',
                    name: '智警'
                },
                {
                    id: 'diva',
                    name: 'DIVA'
                },
                {
                    id: 'tueasyBank',
                    name: '图易数据银行'
                },
                {
                    id: 'tueasyCloud',
                    name: '图易云'
                },
                {
                    id: 'tueasyHub',
                    name: '图易HUB'
                }
            ],
            [
                {
                    id: 'wlgh',
                    name: '未来规划'
                },
                {
                    id: 'ar',
                    name: 'AR'
                },
                {
                    id: 'cysb',
                    name: '唇语识别'
                }
            ]
        ]
    },
    {
        id: 'case',
        name: '案例',
        children: [
            [
                {
                    id: 'police',
                    name: '公安'
                },
                {
                    id: 'traffic',
                    name: '交通'
                }, 
                {
                    id: 'zhengxin',
                    name: '征信'
                },
                {
                    id: 'smartCity',
                    name: '智慧城市'
                }
            ]
        ]
    },
    {
        id: 'cityPartners',
        name: '城市合伙人',
        children: [
            [
                {
                    id: 'partnerDescription',
                    name: '合伙人说明'
                },
                {
                    id: 'join',
                    name: '加入方式',
                    sub: 1
                }, 
                {
                    id: 'reference',
                    name: '合伙人手册',
                    sub: 1
                },
                {
                    id: 'tableDownload',
                    name: '表格下载',
                    sub: 1
                }
            ],
            [
                {
                    id: 'businessShow',
                    name: '业务展示'
                },
                {
                    id: 'scene',
                    name: '应用场景',
                    sub: 1
                }, 
                {
                    id: 'report',
                    name: '当地报道',
                    sub: 1
                },
                {
                    id: 'result',
                    name: '效果达成',
                    sub: 1
                }
            ]
        ]
    },
    {
        id: 'aboutUs',
        name: '关于我们',
        children: [
            [
                {
                    id: 'companyInfo',
                    name: '公司信息'
                },
                {
                    id: 'investorRelation',
                    name: '投资者关系'
                }, 
                {
                    id: 'businessInfo',
                    name: '商管信息'
                },
                {
                    id: 'partner',
                    name: '合作伙伴'
                },
                {
                    id: 'contact',
                    name: '联系我们'
                },
                {
                    id: 'talent',
                    name: '人才储备',
                },                
                {
                    id: 'technology',
                    name: '技术类',
                    sub: 1
                },
                {
                    id: 'zhineng',
                    name: '职能类',
                    sub: 1
                },
                {
                    id: 'market',
                    name: '销售类',
                    sub: 1
                },
                {
                    id: 'consult',
                    name: '咨询类',
                    sub: 1
                }
            ]
        ]
    },
    {
        id: 'bbs',
        name: '论坛',
        children:[
            [
                {
                    id: 'register',
                    name: '注册'
                }
            ]
        ]
    }
];

export default data;