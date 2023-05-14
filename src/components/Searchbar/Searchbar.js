const Searchbar = ({ onSubmit, onChange }) => {
  return (
    <header className="searchbar">
      <form className="form" onSubmit={onSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;

// class Searchbar extends Component {
//   render() {
//     const { onSubmit, onChange } = this.props;

//     return (
//       <header className="searchbar">
//         <form className="form" onSubmit={onSubmit}>
//           <button type="submit" className="button">
//             <span className="button-label">Search</span>
//           </button>

//           <input
//             className="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={onChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }
