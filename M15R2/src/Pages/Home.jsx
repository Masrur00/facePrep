import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Vortex } from "react-loader-spinner";
import styles from './Home.module.css';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [dataSource, setDataSource] = useState([]);
    const [hasMore, setHasmore] = useState(true);
    const [page, setPage] = useState(0);

    const logout = () => {
        dispatch({ type: "LOGOUT_SUCCESS" });
        navigate("/login");
    }

    const fetchMoreData = () => {
        console.log("Yes")
        setPage(prev => prev + 1);
        if (dataSource.length !== 500) {
            var id = setTimeout(() => {
                axios.get(`https://randomuser.me/api/?results=20&page=${page}`)
                    .then((res) => {
                        console.log(res.data.results)
                        setDataSource(dataSource.concat(res.data.results));
                    });
                clearTimeout(id);
            }, 1500);            
        } else {
            setHasmore(false)
        }
    }

    useEffect(() => {        
        fetchMoreData();
    },[])
    
  return (
    <div>
      <div className={styles.navbar}>
        <button className={styles.btn} onClick={logout}>
          Logout
        </button>
      </div>
      <div>
        <InfiniteScroll
          dataLength={dataSource.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <Vortex
              visible={true}
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass={styles.spinner}
              colors={["red", "green", "blue", "yellow", "orange", "purple"]}
            />
          }
        >
          <div className={styles.container}>
            {dataSource.length > 0 &&
              dataSource.map((item) => {
                return (
                  <div key={item.login.uuid} className={styles.content}>
                    <div>
                      <img src={item.picture.large} alt={"Avatar"} />
                    </div>
                    <div>
                      <h3>
                        {item.name.first} {item.name.last}
                      </h3>
                    </div>
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Home
