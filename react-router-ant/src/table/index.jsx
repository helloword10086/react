import React,{Component} from 'react';
import { Table } from 'antd';
class Index extends Component{

  render (){
    const data = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];
    
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },{
        title: '炒作',
        key: 'key',
        render: (text,record) =>{
          console.log(text,record)
          return(
            <div>
              <a href="#">+</a>
              <a href="#">-</a>
              正在操作key:{record.key}
            </div>
          )
        }
      }
    ];
    
    return (
      <div>
      <Table dataSource={data} columns={columns}></Table>
      </div>
    )
  }
}

export default Index