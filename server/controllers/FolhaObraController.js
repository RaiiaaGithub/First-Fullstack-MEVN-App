const FolhaObra = require("../models/FolhaObra");
const { Veiculo } = require("../models/Veiculo");

//Show list
const index = (req, res, next) => {
	if (req.query.page) {
		FolhaObra.paginate(
			{},
			{ page: req.query.page, limit: req.query.limit || 10 }
		)
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
		FolhaObra.find()
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
	let _id = req.body._id;
	FolhaObra.findById(_id)
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
const add = async (req, res, next) => {
	let veiculo;
	try {
		veiculo = await Veiculo.findOne({ matricula: req.body.veiculo });
		console.log(veiculo)
	} catch (error) {
		res.status(400).json({
			message: "Ocurreu um erro!" + error,
		});
	}

	let folhaObra = new FolhaObra({
		veiculo: veiculo,
		servico_feito: req.body.servico_feito,
		materiais: req.body.materiais,
		servico_por_fazer: req.body.servico_por_fazer,
		kms: req.body.kms,
		data: req.body.data,
	});
	folhaObra
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
	let folhaID = req.body.folhaID;

	let veiculo;
	try {
		veiculo = await Veiculo.findOne({ matricula: req.body.veiculo });
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

	FolhaObra.findByIdAndUpdate(folhaID, { $set: updatedData })
		.then(() => {
			res.json({
				message: "Folha editada com sucesso!",
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
	let folhaID = req.body.folhaID;
	FolhaObra.findByIdAndRemove(folhaID)
		.then(() => {
			res.json({
				message: "Folha apagada com sucesso!",
			});
		})
		.catch((error) => {
			res.json({
				message: "Ocurreu um erro!",
			});
		});
};

module.exports = { index, show, add, update, destroy };
