const { Veiculo } = require("../models/Veiculo");

//Show list
const index = (req, res, next) => {
	if (req.query.page) {
		Veiculo.paginate({}, { page: req.query.page, limit: req.query.limit || 10 })
			.then((data) => {
				res.status(200).json({
					data,
				});
			})
			.catch((error) => {
				res.status(400).json({
					message: "Ocurreu um erro!" + error,
				});
			});
	} else {
		Veiculo.find()
			.then((data) => {
				res.status(200).json({
					data,
				});
			})
			.catch((error) => {
				res.status(400).json({
					message: "Ocurreu um erro!" + error,
				});
			});
	}
};

//Show one
const show = (req, res, next) => {
	let matricula = req.body.veiculo;
	Veiculo.findOne({matricula: matricula})
		.then((data) => {
			res.status(200).json({
				data,
			});
		})
		.catch((error) => {
			res.status(400).json({
				message: "Ocurreu um erro!" + error,
			});
		});
};

//Add
const add = (req, res, next) => {
	let veiculo = new Veiculo({
		matricula: req.body.matricula,
		marca: req.body.marca,
		modelo: req.body.modelo,
		cor: req.body.cor,
	});
	veiculo
		.save()
		.then((data) => {
			res.status(200).json({
				message: "Adicionado com sucesso!",
			});
		})
		.catch((error) => {
			res.status(400).json({
				message: "Ocurreu um erro!" + error,
			});
		});
};

//Update
const update = async (req, res, next) => {
	let matricula = req.body.veiculo;

	let veiculo;
	try {
		veiculo = await Veiculo.findOne({ matricula: matricula });
	} catch (error) {
		res.status(400).json({
			message: "Ocurreu um erro!" + error,
		});
	}

	let updatedData = {
		veiculo: veiculo,
		servico_feito: req.body.servico_feito,
		materiais: req.body.materiais,
		servico_por_fazer: req.body.servico_por_fazer,
		kms: req.body.kms,
		data: req.body.data,
	};

	Veiculo.findOneAndUpdate({ matricula: veiculo }, { $set: updatedData })
		.then(() => {
			res.json({
				message: "Veiculo editada com sucesso!",
			});
		})
		.catch((error) => {
			res.json({
				message: "Ocurreu um erro!",
			});
		});
};

//Delete
const destroy = (req, res, next) => {
	let matricula = req.body.veiculo;
	FolhaObra.findOneAndRemove({ matricula: matricula })
		.then(() => {
			res.json({
				message: "Veiculo apagada com sucesso!",
			});
		})
		.catch((error) => {
			res.json({
				message: "Ocurreu um erro!",
			});
		});
};

module.exports = { index, show, add, update, destroy };
