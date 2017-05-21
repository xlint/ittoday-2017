module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news', {
    judul_news: DataTypes.STRING,
    isi_news: DataTypes.STRING
  }, {
    getterMethods: {
      getJudul: function() {
        return this.getDataValue('judul_artikel');
      },
      getIsi: function() {
        return this.getDataValue('isi_artikel');
      }
    },
    setterMethods: {
      setJudul: function(judul) {
        return this.setDataValue('judul_artikel', judul);
      },
      setIsi: function(judul) {
        return this.setDataValue('isi_artikel', isi);
      }
    }
  });
};