import React, { useState, Suspense } from "react";

function getColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return "rgba(" + r + "," + g + "," + b + ",0.8)";
}
/* 获取随机位置 */
function getPostion(position) {
  const { width, height } = position;
  return {
    left: Math.ceil(Math.random() * width) + "px",
    top: Math.ceil(Math.random() * height) + "px",
  };
}
/* 色块组件 */
function Circle({ position }) {
  const style = React.useMemo(() => {
    //用useMemo缓存，计算出来的随机位置和色值。
    return {
      background: getColor(),
      ...getPostion(position),
    };
  }, []);
  return <div style={style} className="circle" />;
}

class Index extends React.Component {
  state = {
    dataList: [], // 数据源列表
    renderList: [], // 渲染列表
    position: { width: 0, height: 0 }, // 位置信息
  };
  box = React.createRef();
  componentDidMount() {
    const { offsetHeight, offsetWidth } = this.box.current;
    const originList = new Array(20000).fill(1);
    this.setState({
      position: { height: offsetHeight, width: offsetWidth },
      dataList: originList,
      renderList: originList,
    });
  }
  render() {
    const { renderList, position } = this.state;
    return (
      <div className="bigData_index" ref={this.box}>
        {renderList.map((item, index) => (
          <Circle position={position} key={index} />
        ))}
      </div>
    );
  }
}

export default function App() {
  const [show, setShow] = useState(false);
  const [btnShow, setBtnShow] = useState(true);
  const handleClick = () => {
    setBtnShow(false);
    setTimeout(() => {
      setShow(true);
    }, []);
  };
  return (
    <div>
      {btnShow && <button onClick={handleClick}>show</button>}
      {show && <Index />}
    </div>
  );
}
