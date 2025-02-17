export const riskSymbol = [
    {
        markerType: 'path',
        markerPathWidth: 12,
        markerPathHeight: 16,
        markerWidth: {
            stops: [
                [10, window.getTextSize(12)],
                [18, window.getTextSize(30)],
            ],
        },
        markerHeight: {
            stops: [
                [10, window.getTextSize(16)],
                [18, window.getTextSize(40)],
            ],
        },
        markerPath: [
            {
                path: 'M6,16c2.4-2.3,6-6.2,6-9.7C12,2.8,9.3,0,6,0S0,2.8,0,6.3C0,9.8,3.8,14,6,16z',
                fill: '#696aad',
            },
        ],
    },
    {
        textName: '{published_address}',
        textFill: '#696aad',
        textOpacity: 0.85,
        textSize: {
            stops: [
                [12, 0],
                [12, 12],
            ],
        },
        textDy: 12,
        textWeight: 'bold',
        textHaloRadius: 2,
        textHaloFill: 'white',
        textHaloOpacity: 0.85,
    },
]

const getPointSymbol = (fill: string, line: string) => [
    {
        markerType: 'ellipse',
        markerFill: fill,
        markerFillOpacity: 1,
        markerLineColor: line,
        markerLineWidth: 1,
        markerLineOpacity: 1,
        markerWidth: {
            stops: [
                [8, window.getTextSize(4)],
                [22, window.getTextSize(11)],
            ],
        },
        markerHeight: {
            stops: [
                [8, window.getTextSize(4)],
                [22, window.getTextSize(11)],
            ],
        },
        markerOpacity: 1,
    },
    {
        textName: '{published_address}',
        textFill: fill,
        textSize: {
            stops: [
                [15, 0],
                [15.1, 12],
            ],
        },
        textDy: 12,
        textWeight: 'bold',
        textHaloRadius: 2,
        textHaloFill: 'white',
    },
]

export const trackSymbolLong = getPointSymbol('#ffedd5', '#ffffff')
export const trackSymbol14 = getPointSymbol('#fdba74', '#ffedd5')
export const trackSymbol7 = getPointSymbol('#f97316', '#fdba74')
export const trackSymbol3 = getPointSymbol('#c2410c', '#f97316')
