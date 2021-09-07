import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import loadMovies from '../../../redux/actions/actionCreatorTopMovies';

import './NavButtons.scss';

const NavButtons = () => {
  const [pages, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies(pages));
  }, [pages]);
  return (
    <div className="numbers">
      <button type="submit" className="button" onClick={() => setPage(1)}>1</button>
      <button type="submit" className="button" onClick={() => setPage(2)}>2</button>
      <button type="submit" className="button" onClick={() => setPage(3)}>3</button>
      <button type="submit" className="button" onClick={() => setPage(4)}>4</button>
      <button type="submit" className="button" onClick={() => setPage(5)}>5</button>
      <button type="submit" className="button" onClick={() => setPage(6)}>6</button>
      <button type="submit" className="button" onClick={() => setPage(7)}>7</button>
      <button type="submit" className="button" onClick={() => setPage(8)}>8</button>
      <button type="submit" className="button" onClick={() => setPage(9)}>9</button>
      <button type="submit" className="button" onClick={() => setPage(10)}>10</button>
    </div>
  );
};

export default NavButtons;
