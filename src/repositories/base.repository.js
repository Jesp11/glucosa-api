const { Op } = require('sequelize');

class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data, transaction = null) {
        return this.model.create(data, { transaction });
    }

    async findById(id, transaction = null) {
        return this.model.findByPk(id, { transaction });
    }

    async findOne(where, transaction = null) {
        return this.model.findOne({ where, transaction });
    }

    async findAll(condition = {}, transaction = null) {
        return this.model.findAll({ where: condition, transaction });
    }

    async update(id, data, transaction = null) {
        const item = await this.model.findByPk(id, { transaction });
        if (!item) return null;
        return item.update(data, { transaction });
    }

    async delete(id, transaction = null) {
        const item = await this.model.findByPk(id, { transaction });
        if (!item) return false;
        await item.destroy({ transaction });
        return true;
    }

    async validateUnique(field, value, excludeId = null, transaction = null) {
        const where = { [field]: value };
        if (excludeId) where.id = { [Op.ne]: excludeId };
        const item = await this.model.findOne({ where, transaction });
        return !item;
    }
}

module.exports = BaseRepository;
