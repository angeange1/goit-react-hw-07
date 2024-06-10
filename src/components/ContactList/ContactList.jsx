import Contact from "../Contact/Contact"
import { useSelector } from "react-redux"
import { selectContacts } from "../../redux/contactsSlice"
import { selectNameFilter } from "../../redux/filtersSlice"

const ContactList = () => {
	const contactsArr = useSelector(selectContacts);
	const filters = useSelector(selectNameFilter);
	const filteredContacts = contactsArr.filter(contact =>
contact.name.toLowerCase().includes(filters.toLowerCase()))

    return (<ul>
		{filteredContacts.map((contact) => {
			return <li key={contact.id}>
				<Contact data={contact} />
			</li>})}
		</ul>)
}

export default ContactList