import express, {
	Request,
	Response,
} from "express";
const router = express.Router();

import { User } from "../entity/User";
import { Profile } from "../entity/Profile";
import { AppDataSource } from "../data-source"
const userRepo = AppDataSource.getRepository(User)
const profileRepo = AppDataSource.getRepository(Profile)

router.get('/', (req: Request, res: Response) => {
	res.send(`orm`)
})

router.get('/users', (req: Request, res: Response) => {
	// userRepo.find() /* get fom single table*/

	// find with relation
	userRepo.find({
		relations: {
			profile: true
		}
	})
		.then(allRecords => res.json(allRecords))
		.catch((err: any) => {
			console.log(err);
		});
})


router.get('/users/:id', (req: Request, res: Response) => {
	const { id } = req.params;

	userRepo.findOne({
		where: {
			id: (id as unknown) as number
		},
		relations: {
			profile: true
		}
	})
		.then(allRecords => res.json(allRecords))
		.catch((err: any) => {
			console.log(err);
		});
})





router.post('/users', (req: Request, res: Response) => {
	const { firstName, lastName, age, gender, photo } = req.body;

	let profile: Profile = new Profile();
	profile.gender = gender;
	profile.photo = photo;

	// insert user
	let user: User = new User();
	user.firstName = firstName;
	user.lastName = lastName;
	user.age = age;
	user.isActive = true;
	user.profile = profile;

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

	// for singlr table
	// userRepo.update(id, { firstName, lastName, age })

	// for relation
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

router.delete('/profile/:id', (req: Request, res: Response) => {
	const { id } = req.params;

	profileRepo.delete(id)
		.then(_ => res.json("deleted"))
		.catch((err: any) => {
			console.log(err);
			res.send(`error deleting`)
		});
})








module.exports = router;