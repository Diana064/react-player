export const Controls = () => {
  return (
    <section>
      <button
        type="button"
        disabled={index === 0}
        onClick={() => this.changeValue(-1)}
      >
        Назад
      </button>
      <button
        type="button"
        disabled={index === totalItems}
        onClick={() => this.changeValue(+1)}
      >
        Вперед
      </button>
    </section>
  );
};
