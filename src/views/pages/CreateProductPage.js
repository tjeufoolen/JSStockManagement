import { Form } from './form';

const { Page } = require('./Page');

export class CreateProductPage extends Form {
    constructor(createProductController) {
        super();
        
        this.createProductController = createProductController;
        this.categoryTypes = Object.values(this.createProductController.app.enums.categoryTypes);

        // Create heading
       this.addHeading("Product aanmaken")    
        this.form = this.createElement("form", ["needs-validation","mt-4"]);
    
        // this.createPartOne();
        
        // this.createPartTwo();

        this.createPartThree();

        this.addElementToRoot(this.form);
    }

    createPartOne(){
        let _self = this;
        this.form.innerHTML ="";
        this.form.appendChild(this.createProgressBar(25));

        this.form.onsubmit = (event) => {
            event.preventDefault();
            this.name = _self.getElement("#name").value;
            this.description = _self.getElement("#description").value;
            _self.createProductController.validatePartOne(this.name, this.description);            
        }


        this.form.appendChild(this.createTextField("name", "Naam", "Oeteldonksjaal", "Vul een geldige artikel naam in.", true));
        this.form.appendChild(this.createTextArea("description", "Omschrijving", "Met deze sjaal blijft u heerlijk warm", "Vul een geldige beschrijving in", true));
        this.form.appendChild(this.createSubmitButton("Volgende"));
    }

    createPartTwo(){
        let _self = this;
        this.form.innerHTML ="";
        this.form.appendChild(this.createProgressBar(50));

        this.form.onsubmit = (event) => {
            event.preventDefault();
            this.costPrice = _self.getElement("#costPrice").value;
            this.sellPrice = _self.getElement("#sellPrice").value;
            _self.createProductController.validatePartTwo(this.costPrice, this.sellPrice);            
        }
        
        this.form.appendChild(this.createNumberField("costPrice", "Inkoop prijs", "99,99","Voer een geldige inkoop prijs in.", true));
        this.form.appendChild(this.createNumberField("sellPrice", "Verkoop prijs (excl. BTW)", "150,00","Voer een geldige verkoop prijs in.", true));

        this.form.appendChild(this.createSubmitButton("Volgende"));
    }

    createPartThree(){
        let _self = this;
        this.form.innerHTML ="";
        this.form.appendChild(this.createProgressBar(75));

        this.form.appendChild(this.createSelectBox("category", "Categorie", this.categoryTypes, "Selecteer een categorie", true));


        // switch()




        // console.log(this.name);
        // console.log(this.description);
        // console.log(this.costPrice);
        // console.log(this.sellPrice);
        
    }
}






























        // this.formRowName = this.createElement("div", ["form-group", "row"]);
            
        //     this.nameCol = this.createElement("div", ["col-sm-10"]);
        //         this.nameFeedBack = this.createElement("div", ["invalid-feedback"]);
        //         this.nameFeedBack.innerText = "Vul een naam in!"

        //         this.nameInput = this.createElement("input", ["form-control"]);
        //         this.nameInput.id = "validationName";
        //         this.nameInput.placeholder = "Artikel naam";
        //         this.nameInput.type = "text";
        //         this.nameInput.required = true;
        //     this.nameCol.appendChild(this.nameFeedBack);
        //     this.nameCol.appendChild(this.nameInput);

        //     this.nameLabel = this.createElement("label",["col-sm-2","col-form-label"]);
        //     this.nameLabel.innerText = "Artikel naam:"
        //     this.nameLabel.htmlFor = "validationName";
        // this.formRowName.appendChild(this.nameLabel);
        // this.formRowName.appendChild(this.nameCol);