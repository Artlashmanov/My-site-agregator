import { FC } from "react";
import { SubmitHandler,useForm, Controller } from "react-hook-form";
import { INaming, IOption  } from "./interface-form";
import ReactSelect from 'react-select'


const options: IOption[] = [{
  value: 'Mercedes',
  label: 'Mercedes-Benz'
},{
  value: 'Bentley',
  label: 'Bentley'
},{
  value: 'Porsche',
  label: 'Porsche'
},{
  value: 'Жигули',
  label: 'Жигули'
},
]


const getValue = (value:string) =>
  value? options.find(option => option.value === value) : ''

const FormOffer:FC = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    control,
  } = useForm<INaming>({
    mode: 'onChange'
  })

  const onSubmit:SubmitHandler<INaming> = (data) => {
    alert(`Your name ${data.name}`)
    reset()
  }

  return  (
  <div style={{textAlign :'center'}}>
    <h1> Заполните поля </h1>
    <form onSubmit={handleSubmit(onSubmit)} style={{width: '66%' , margin: 'auto', padding: '10px'}}>
    <div>

<input style={{margin:'20px'}} {...register('name',

    {
      required: 'Введите Ваше имя !',
    })}
    placeholder='Имя'
    />
    {errors?.name && (
      <div style={{ color: 'red' }}>{errors.name.message}</div>
    )}

<input style={{margin:'20px'}} {...register('lastname',

{
  required: 'Введите Вашу фамилию !',
})}
placeholder='Фамилия'
/>
{errors?.lastname && (
  <div style={{ color: 'red'}}>{errors.lastname.message}</div>
)}

<input style={{margin:'20px'}} {...register('email',

{
  required: 'Введите Вашу почту !',
  pattern:{
    value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
    message: 'Пожалуйста введите правильный тип почты!'
  }
})}

placeholder='eMail'
/>
{errors?.email && (
  <div style={{ color: 'red'}}>{errors.email.message}
  </div>
)}

<input style={{margin:'20px'}} {...register('old',

    {
      required: 'Введите год выпуска авто !',
    })}
    placeholder='Год выпуска Автомобиля'
    />
    {errors?.old && (
      <div style={{ color: 'red'}}>{errors.old.message}</div>
    )}

<Controller
      control={control}
      name='address.model'
      rules={{
        required:'Модель авто обязательно!',
      }}
      render={({ field:{onChange, value} , fieldState: { error } } ) => (
       <div style={{width: '67%', display: 'inline-block', margin:'20px'}}>
       <ReactSelect
          placeholder='Укажите модель авто'
          options={options}
          value={getValue(value)}
          onChange={newValue => onChange((newValue as IOption).value)}


        />
        {error && <div style={{ color: 'red'}}>{error.message}
          </div>}
        </div>)
}
      />

<input style={{margin:'20px'}} {...register('comment',

{
  required: 'Введите описание проблемы !',
})}
placeholder='Комментарий'
/>
{errors?.comment && (
  <div style={{ color: 'red'}}>{errors.comment.message}</div>
)}
<div className="buttonformoffer">
 <button>ОТПРАВИТЬ</button>
 </div>
</div>
</form>
</div>
  );
}

export default FormOffer;
