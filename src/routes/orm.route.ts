import express, {
	Request,
	Response,
} from "express";
const router = express.Router();

import { User } from "../entity/User";
import { AppDataSource } from "../data-source"
const userRepo = AppDataSource.getRepository(User)

router.get('/', (req: Request, res: Response) => {
	res.send(`orm`)
})


router.get('/users/:id', (req: Request, res: Response) => {
	const { id } = req.params;


	if (id) {
		userRepo.findOne({
			where: {
				id
			}
		})
			.then(allRecords => res.json(allRecords))
			.catch((err: any) => {
				console.log(err);
			});
	}
	else {
		userRepo.find()
			.then(allRecords => res.json(allRecords))
			.catch((err: any) => {
				console.log(err);
			});
	}

})






router.post('/users', (req: Request, res: Response) => {
	const { firstName, lastName, age } = req.body;

	// insert
	let user: User = new User();
	user.firstName = firstName;
	user.lastName = lastName;
	user.age = age;
	user.isActive = true;

	userRepo.save(user)
		.then(saved => {
			res.json(saved)
		})
		.catch((err: any) => {
			console.log(err);
			res.send(`insert error`)
		});
})




router.put('/users/:id', (req: Request, res: Response) => {
	const { id } = req.params;
	const { firstName, lastName, age } = req.body;

	userRepo.update(id, { firstName, lastName, age })
		.then(response => {
			res.json(response)
		})
		.catch((err: any) => {
			console.log(err);
			res.send(`update error`)
		});
})



router.delete('/users/:id', (req: Request, res: Response) => {
	const { id } = req.params;

	userRepo.delete(id)
		.then(_ => res.json("deleted"))
		.catch((err: any) => {
			console.log(err);
			res.send(`error deleting`)
		});
})



module.exports = router;