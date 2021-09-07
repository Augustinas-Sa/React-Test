import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyAccountScreen.css';
import Counter from '../components/Counter';

const MyAccountScreen = () => {
  // hooks
  // - local state
  const [teams, setTeams] = useState([]);

  // - side effects
  useEffect(() => {
    axios.get('http://localhost:5000/api/teams').then((response) => {
      setTeams(response.data);
    });
  }, []);

  return (
    <main>
      <section>
        <h2 className='teams-name'>All teams</h2>
        <div className='main-teams-div'>
          {teams.map((item) => (
            <div className='card_shadow' key={item._id}>
              <img className='images' src={item.image} alt='' />
              <Counter />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MyAccountScreen;
