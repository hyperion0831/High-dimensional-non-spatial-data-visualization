import { useEffect, useRef } from "react";
import FourData from "./new.json"
import * as echarts from 'echarts';

export function Five(){
    const Fig1Ref = useRef(null);
    const Fig2Ref = useRef(null);
    const getData1 = () => {
      const types = [
        '未识别','小型车辆','行人','非机动车','卡车','面包车','客车','手推车'
      ]
      var datas = []
      for (let index = 0; index < FourData.length; index++) {
        const e = FourData[index];
        var radians =  e.heading * (180/Math.PI);
        datas.push([e.is_moving,radians,e.velocity,types[e.type]])
      }
      return datas
    }
    const getOption1 = () =>{
      var schema = [
        { name: 'is_moving', index: 0, text: '运动状态' },
        { name: 'heading', index: 1, text: '运动方向(单位角度)' },
        { name: 'vel', index: 2, text: '速度' },
        { name: 'type', index: 3, text: '类型' },
      ];
      var lineStyle = {
        width: 1,
        opacity: 0.5
      };
      var option = {
        tooltip: {
          padding: 10,
          backgroundColor: '#333',
          borderColor: '#777',
          borderWidth: 1
        },
        visualMap: {
          show: false,
          min: 0,
          max: 150,
          dimension: 2,
          inRange: {
            color: ['#adc1bf', '#31655f', '#142826'].reverse()
          }
        },
        parallelAxis: [
          {
            dim: 0,
            name: schema[0].text,
            inverse: true,
            max: 1,
            nameLocation: 'start'
          },
          { dim: 1, name: schema[1].text,
            min:-180,
            max: 180
          },
          { dim: 2, name: schema[2].text },
          { dim: 3, name: schema[3].text ,
            type:'category',
            data: [
              '未识别','小型车辆','行人','非机动车','卡车','面包车','客车','手推车'
            ]},
        ],
        parallel: {
          left: '5%',
          right: '18%',
          bottom: 100,
          parallelAxisDefault: {
            type: 'value',
            name: '路况',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
              color: '#111',
              fontSize: 12
            },
            axisLine: {
              lineStyle: {
                color: '#aaa'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#111'
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              color: '#111'
            }
          }
        },
        series: [
          {
            name: '特定时间戳路况元素信息',
            type: 'parallel',
            lineStyle: lineStyle,
            data: getData1()
          }
        ]
      };
      return option
    }
    var option2 = {
      color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
      title: {
        text: '道路路况'
      },
      legend: {},
      radar: [
        {
          indicator: [
            { text: '运动中数量' , max: 100, min: 40},
            { text: '平均速度' , max: 10, min: 4 },
            { text: '交通工具复杂度', max: 300, min: 100 },
            { text: '平均运动方向', max: 25, min: 15}
          ],
          radius: 120,
          startAngle: 45,
          splitNumber: 2,
          shape: 'circle',
          axisName: {
            formatter: '{value}',
            color: '#428BD4'
          },
          splitArea: {
            areaStyle: {
              color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowBlur: 10
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(211, 253, 250, 0.8)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(211, 253, 250, 0.8)'
            }
          }
        }
      ],
      series: [
        {
          type: 'radar',
          emphasis: {
            lineStyle: {
              width: 4
            }
          },
          data: [
            {
              value: [52, 6.9, 194, 16.2],
              name: 'time1',
              areaStyle: {
                color: 'rgba(0, 0, 100, 0.6)'
              }
            },
            {
              value: [61, 6.3, 222, 21.5],
              name: 'time2',
              areaStyle: {
                color: 'rgba(255, 228, 52, 0.6)'
              }
            },
            {
              value: [70, 5.0, 243, 21.1],
              name: 'time3',
              areaStyle: {
                color: 'rgba(0, 100, 0, 0.6)'
              }
            }
          ]
        },
      ] 
    };
    const renderMap = ()=> {
      var map = echarts.init(Fig1Ref.current);
      var fig = echarts.init(Fig2Ref.current);
      map.setOption(getOption1())
      fig.setOption(option2)
    }
  
    useEffect(()=>{
      renderMap();
    },[])
  
    return(
      <div style={{ width: "100%", height: "1000px" }}>
        <p>第五题</p>
        <h1>驾驶员画像描述</h1>
        <div style={{ width: "100%", height: "60%" }} ref={Fig1Ref}></div>
        <h1>路况描述</h1>
        <div style={{ width: "100%", height: "40%" ,borderBottom:'50px'}} ref={Fig2Ref}></div>
      </div>
    )
  }
  