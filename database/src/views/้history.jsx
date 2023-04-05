import { Space, Table, Tag } from 'antd';
import '../views/history.css'
const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
const columns = [
    {
      title: 'Fligh-ID',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Airline',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Country',
      dataIndex: 'address',
      key: 'address',
    },
    {
        title: 'Take-off',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Landing',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'date',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'price',
        dataIndex: 'address',
        key: 'address',
      },
  ];
const History = () =>{
    return(
        <>
            <div className="containerh">
                <div className="head">
                    History
                </div>
                <Table columns={columns} />;
                
            </div>
        </>
    )
}

export default History